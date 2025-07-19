import { useState } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import RotateLeftOutlinedIcon from "@mui/icons-material/RotateLeftOutlined";
import { tokens } from "../theme";


const images = import.meta.glob("../assets/pins/*.jpg", { eager: true });
const imageUrls = Object.values(images).map((img) => img.default);

function ImagePins() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const [index, setIndex] = useState(0);

    const showNext = () => {
        const nextIndex = (index + 1) % imageUrls.length;
        setIndex(nextIndex);
    };

    return (
        <>
            <Box className="pins-wrapper" display="flex" height="180.35px" padding="15px" borderRadius="10px" bgcolor={colors.primary[400]} width="100%" position="relative">
                <img src={imageUrls[index]} alt="pin" width="100%" height="auto" className="pins-img" style={{ borderRadius: "8px", objectFit: "contain" , pointerEvents:"none"}} />
                <IconButton className="random-img-btn" sx={{ padding: "5px", position: "absolute", right: '10%', bottom: "10%", color: "#efefef" }} size="20" onClick={showNext}>
                    <RotateLeftOutlinedIcon />
                </IconButton>
            </Box>
        </>
        </>
    );
}

export default ImagePins;
