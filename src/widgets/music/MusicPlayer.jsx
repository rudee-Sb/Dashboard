import { Box, useTheme, Typography, IconButton } from "@mui/material";
import { tokens } from "../../theme";
import { useState, useEffect, useRef } from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

function Music() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [tracks, setTracks] = useState([]);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}music/songs.json`)
      .then((res) => res.json())
      .then((data) => setTracks(data))
      .catch((err) => console.error('Failed to load tracks:', err));
  }, []);


  const playMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const next = (currentSong + 1) % tracks.length;
    setCurrentSong(next);
    setIsPlaying(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  const prevTrack = () => {
    const prev = (currentSong - 1 + tracks.length) % tracks.length;
    setCurrentSong(prev);
    setIsPlaying(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  const onLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) {
      setDuration(audio.duration);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
    }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = e.target.value;
      setCurrentTime(e.target.value);
    }
  };

  const formatTime = (time) =>
    isNaN(time) ? '0:00' : `${Math.floor(time / 60)}:${Math.floor(time % 60).toString().padStart(2, '0')}`;

  if (tracks.length === 0) return <Typography>Loading Tracks...</Typography>;

  const track = tracks[currentSong];

  return (
    <Box
      width="100%"
      bgcolor={colors.primary[400]}
      borderRadius="10px"
      padding="10px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="10px"
    >
      {/* Image */}
      <Box width="25%" height="100%">
        {track.image && (
          <img
            src={track.image}
            alt={track.title}
            style={{
              width: '50px',
              height: "50px",
              borderRadius: '8px',
              objectFit: 'cover'
            }}
          />
        )}
      </Box>

      {/* Metadata + Controls */}
      <Box display="flex" alignItems="center" width="70%" p="0px 8px" flexDirection="column">
        <Box mt="5px" mb="5px" width="100%">
          <Typography variant="h6" fontWeight="500">{track.title}</Typography>
          <Typography variant="subtitle2" fontWeight="400" color={colors.greenAccent[400]}>
            {track.artist}
          </Typography>
          <audio
            ref={audioRef}
            src={track.src}
            onLoadedMetadata={onLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
          />
        </Box>

        {/* Progress Bar */}
        <Box width="100%">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            step="0.1"
            onChange={handleSeek}
            style={{ width: '100%' }}
          />
          <Box display="flex" justifyContent="space-between" fontSize="0.85rem">
            <Typography variant="caption">{formatTime(currentTime)}</Typography>
            <Typography variant="caption">{formatTime(duration)}</Typography>
          </Box>
        </Box>

        {/* Controls */}
        <Box display="flex" alignItems="center" justifyContent="center" gap="8px" mt="5px">
          <IconButton onClick={prevTrack}><SkipPreviousIcon /></IconButton>
          <IconButton onClick={playMusic}>
            {isPlaying ? <StopCircleIcon /> : <PlayCircleIcon />}
          </IconButton>
          <IconButton onClick={nextTrack}><SkipNextIcon /></IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Music;
