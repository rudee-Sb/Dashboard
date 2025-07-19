import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import RotateLeftOutlinedIcon from "@mui/icons-material/RotateLeftOutlined";

const images = import.meta.glob("../assets/pins/*.jpg", { eager: true });
const imageUrls = Object.values(images).map((img) => img.default);

function ImagePins() {
    const [index, setIndex] = useState(0);

    const showNext = () => {
        const nextIndex = (index + 1) % imageUrls.length;
        setIndex(nextIndex);
    };

    return (
        <Box display="flex" padding="15px" borderRadius="10px" bgcolor="#eee" width="100%" position="relative">
            <img
                src={imageUrls[index]}
                alt={`pin ${index + 1}`}
                width="100%"
                height="auto"
                style={{ borderRadius: "8px", objectFit: "contain", pointerEvents: "none" }}
            />
            <IconButton
                sx={{ padding: "5px", position: "absolute", right: '10%', bottom: "10%", color: "#333" }}
                onClick={showNext}
            >
                <RotateLeftOutlinedIcon />
            </IconButton>
        </Box>
    );
}

export default ImagePins;
