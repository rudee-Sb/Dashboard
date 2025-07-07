import { useState } from "react";
import { Box, IconButton, useTheme } from '@mui/material';
import RotateLeftOutlinedIcon from "@mui/icons-material/RotateLeftOutlined";
import { tokens } from "../theme";

function ImagePins() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const fileNames = ["pin1.jpg", "pin2.jpg", "pin3.jpg"];
    const makeUrl = (name) => `/pins/${name}`;

    // const [src, setSrc] = useState(makeUrl(fileNames[0]));

    const showRandom = () =>
        setSrc(makeUrl(fileNames[Math.floor(Math.random() * fileNames.length)]));

    const src = `src\\assets\\user-prof.jpg`

    return (
        <>
            <Box className="pins-wrapper" display="flex" padding="15px" borderRadius="10px" bgcolor={colors.primary[400]} width="fit-content" position="relative" ml="15px">
                <img src={src} alt="pin" width={170} height="auto" className="pins-img" style={{ borderRadius: "8px", objectFit: "contain" }} />
                <IconButton className="random-img-btn" sx={{ padding: "5px", position: "absolute", right: '7%', bottom: "7%", color: "#c2c2c2" }} size="20" onClick={showRandom}>
                    <RotateLeftOutlinedIcon />
                </IconButton>
            </Box>

        </>
    );
}

export default ImagePins