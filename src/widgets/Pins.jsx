import { useState } from "react";
import { Box, IconButton, useTheme } from '@mui/material';
import RotateLeftOutlinedIcon from "@mui/icons-material/RotateLeftOutlined";
import { tokens } from "../theme";

function ImagePins() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const fileNames = ["pin1.jpg", "pin2.jpg", "pin3.jpg", "pin4.jpg", "pin5.jpg", "pin6.jpg"];
    const makeUrl = (name) => `/assets/pins/${name}`;

    const [index, setIndex] = useState(0);
    const [src, setSrc] = useState(makeUrl(fileNames[0]));

    const showNext = () => {
        const nextIndex = (index + 1) % fileNames.length;
        setIndex(nextIndex);
        setSrc(makeUrl(fileNames[nextIndex]));
    };

    return (
        <>
            <Box className="pins-wrapper" display="flex" padding="15px" borderRadius="10px" bgcolor={colors.primary[400]} width="100%" position="relative">
                <img src={src} alt="pin" width="100%" height="auto" className="pins-img" style={{ borderRadius: "8px", objectFit: "contain" , pointerEvents:"none"}} />
                <IconButton className="random-img-btn" sx={{ padding: "5px", position: "absolute", right: '10%', bottom: "10%", color: "#efefef" }} size="20" onClick={showNext}>
                    <RotateLeftOutlinedIcon />
                </IconButton>
            </Box>

        </>
    );
}

export default ImagePins
