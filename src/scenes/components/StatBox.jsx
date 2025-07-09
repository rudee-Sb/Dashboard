import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { tokens } from "../../theme";
import ProgressCircle from "./ProgressCircle";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

function StatBox({ title, subtitle, icon, completed="0", total="0" }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const progress = completed/total;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : null;

    return(<>
        <Box width="100%" height="150px" p="15px" borderRadius="10px" bgcolor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" flex>
            <Box display="flex" justifyContent="space-between" flexDirection="row" height="100%" width="100%" padding="10px">
                <Box display="flex" justifyContent="space-between" flexDirection="column" width="140px" textAlign="left" alignItems="start">
                    <IconButton>
                        <AssignmentOutlinedIcon />
                    </IconButton>
                    <Typography mb={1} variant="h4" fontWeight="bold">{title}</Typography>
                    <Typography variant="h6" fontSize="11px" color={colors.pinkAccent[500]} fontStyle="italic">Completed: {completed} Total: {total}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" flexDirection="column" width="100%" alignItems="flex-end">
                    <ProgressCircle progress={progress}/>
                    <Typography variant="h5" fontStyle="italic" mb="7px" mr="5px">{percentage == null ? null : `"${percentage}%"` }</Typography>
                </Box>
            </Box>
        </Box>
    </>);
}

export default StatBox