import AddNote from "../scenes/notes/AddNote";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";

function StickyNote() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box display="flex" justifyContent="space-between" flexDirection="column" padding="15px" borderRadius="10px" bgcolor={colors.primary[400]} width="auto">
            <Typography variant="h3" color={colors.grey[100]} fontWeight="600" mb={1}>NOTES</Typography>
            <AddNote w="100%" h="110px" />
        </Box>
    );
}

export default StickyNote