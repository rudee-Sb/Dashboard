import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

function ProgressCircle({ progress, size = "50" }) {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = progress * 360;

    return (<>
        <Box sx={{
            background: `
                radial-gradient(${colors.primary[400]} 55%, transparent 56%),
                conic-gradient(
                ${colors.blueAccent[500]} 0deg ${angle}deg,
                transparent ${angle}deg 360deg
                ),
                ${colors.pinkAccent[300]}
            `,
            borderRadius: "50%",
            width: `${size}px`,
            height: `${size}px`
        }}>
        </Box>

    </>);
}

export default ProgressCircle