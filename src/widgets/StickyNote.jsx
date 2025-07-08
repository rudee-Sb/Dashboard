import AddNote from "../scenes/notes/AddNote";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";

function StickyNote() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box display="flex" justifyContent="space-between" flexDirection="column" padding="15px" borderRadius="10px" bgcolor={colors.primary[400]} width="200px" height="200px" mt="15px" ml="15px">
            <Typography variant="h3" color={colors.grey[100]} fontWeight="600">NOTES</Typography>
            <AddNote w="170px" h="125px" />
        </Box>
    );
}

export default StickyNote