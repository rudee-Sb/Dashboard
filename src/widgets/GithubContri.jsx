import GitHubCalendar from 'react-github-calendar'
import { Box, useTheme } from '@mui/material'
import { tokens } from '../theme'

function ContriGraph() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (<>
    <Box width="200px" height="100px" borderRadius="10px" bgcolor={colors.primary[400]} padding="10px" display="flex" alignItems="center" justifyContent="center" sx={{cursor:"pointer"}} ml="15px" mt="15px">
        <GitHubCalendar username="rudee-Sb" style={{width:"180px", height:"100px"}}/>
    </Box>
    </>)
}

export default ContriGraph