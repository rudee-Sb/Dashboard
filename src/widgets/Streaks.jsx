import { useState, useEffect } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import { tokens } from "../theme";

function Streaks() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const [streak, setStreak] = useState({ curStreak: 0, longestStreak: 0 });

  useEffect(() => {
    fetch("https://solitary-cake-1e15.rudrabhau844.workers.dev/")
      .then(res => res.json())
      .then(data => setStreak(data));
  }, []);

  return (
    <>
      <Box width="100%" height="100%" borderRadius="10px" bgcolor={colors.primary[400]} padding="10px" display="flex" alignItems="center" justifyContent="space-between" flexDirection="column" gap="15px">
        <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection="column" gap="10px" >
          <IconButton sx={{ color: "#ff4000" }} size="25">
            <WhatshotOutlinedIcon/>
          </IconButton>
          <h3>{streak.curStreak}</h3>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection="column" gap="10px">
          <IconButton sx={{ color: "#52bf90" }} size="25">
            <FitnessCenterOutlinedIcon/>
          </IconButton>
          <h3>3</h3>
        </Box>
      </Box>
  </>
  );
}

export default Streaks
