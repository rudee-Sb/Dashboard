import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { tokens } from "../theme";
import InputBase from '@mui/material/InputBase';
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { useState, useEffect, useRef } from "react";
import Header from "./global/Header";

function Pomodoro() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [isRunning, setIsRunning] = useState(false);
    const [onBreak, setOnBreak] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(25 * 60); // default 25 min
    const [workInput, setWorkInput] = useState("25");
    const [breakInput, setBreakInput] = useState("5");

    const initialWork = useRef(25 * 60);
    const initialBreak = useRef(5 * 60);
    const intervalRef = useRef(null);

    // Format time as MM:SS
    const formatTime = (secs) => {
        const min = String(Math.floor(secs / 60)).padStart(2, "0");
        const sec = String((secs % 60)).padStart(2, "0");
        return `${min}:${sec}`;
    };

    // Start Timer
    const startTimer = () => {
        if (intervalRef.current !== null) return; // Already running

        intervalRef.current = setInterval(() => {
            setSecondsLeft(prev => {
                if (prev === 0) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;

                    const nextTime = onBreak ? initialWork.current : initialBreak.current;
                    setOnBreak(prev => !prev);
                    setSecondsLeft(nextTime);
                    startTimer(); // restart immediately for next session
                    return nextTime;
                }
                return prev - 1;
            });
        }, 1000);

        setIsRunning(true);
    };

    // Pause Timer
    const pauseTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
    };

    // Reset Timer
    const resetTimer = () => {
        pauseTimer();
        setOnBreak(false);
        setSecondsLeft(initialWork.current);
    };

    // Handle Input (digits only)
    const handleWorkInput = (e) => {
        const val = e.target.value.replace(/\D/g, "");
        setWorkInput(val);
    };

    const handleBreakInput = (e) => {
        const val = e.target.value.replace(/\D/g, "");
        setBreakInput(val);
    };

    // On Start: set durations and begin
    const handleStartClick = () => {
        const work = parseInt(workInput, 10);
        const brk = parseInt(breakInput, 10);

        initialWork.current = (isNaN(work) || work < 1 ? 25 : work) * 60;
        initialBreak.current = (isNaN(brk) || brk < 1 ? 5 : brk) * 60;

        setSecondsLeft(initialWork.current);
        setOnBreak(false);
        startTimer();
    };

    const sessionLabel = onBreak ? "BREAK" : "WORK";

    return (
        <Box m="20px">
            <Header title={"POMODORO CLOCK"} subtitle={"Timer for work focus."} />
            <Box mt="60px" display="flex" alignItems="center" flexDirection="column">
                <Box width="400px" borderRadius="20px" bgcolor={colors.primary[400]} p="10px" display="flex" alignItems="center" flexDirection="column" >
                    <Typography fontSize="6rem" color={colors.grey[100]}>
                        {formatTime(secondsLeft)}
                    </Typography>
                    <Typography
                        variant="h5"
                        borderRadius="14px"
                        padding="3px 7px"
                        border={onBreak ? "1.4px solid #ce4c66" : "1.4px solid #4ad1db"}
                        color={onBreak ? colors.pinkAccent[500] : colors.greenAccent[500]}
                        mt="10px"
                    >
                        {sessionLabel}
                    </Typography>
                </Box>

                <Box display="flex" gap="5px" mt="10px">
                    <Box display="flex" bgcolor={colors.primary[400]} borderRadius="6px" alignItems="center" padding="3px" width="80px" height="80px" m="5px">
                        <InputBase
                            sx={{ ml: 2.5, flex: 1, fontSize: "30px" }}
                            placeholder="W"
                            value={workInput}
                            onChange={handleWorkInput}
                        />
                    </Box>
                    <Box display="flex" bgcolor={colors.primary[400]} borderRadius="6px" alignItems="center" padding="3px" width="80px" height="80px" m="5px">
                        <InputBase
                            sx={{ ml: 2.5, flex: 1, fontSize: "30px" }}
                            placeholder="B"
                            value={breakInput}
                            onChange={handleBreakInput}
                        />
                    </Box>
                </Box>

                <Box>
                    {isRunning ? (
                        <IconButton onClick={pauseTimer} size="40px"><PauseCircleOutlineIcon sx={{ fontSize: "36px" }}/></IconButton>
                    ) : (
                        <IconButton onClick={handleStartClick}><PlayArrowOutlinedIcon sx={{ fontSize: "36px" }} /></IconButton>
                    )}
                    <IconButton onClick={resetTimer}><RestartAltOutlinedIcon sx={{ fontSize: "36px" }} /></IconButton>
                </Box>
            </Box>
        </Box>
    );
}

export default Pomodoro;
