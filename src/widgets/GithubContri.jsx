import GitHubCalendar from 'react-github-calendar';

import { Box, useTheme } from '@mui/material'
import { tokens } from '../theme'

function ContriGraph() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (<>
        <Box width="100%" borderRadius="10px" bgcolor={colors.primary[400]} padding="10px" display="flex" alignItems="center" justifyContent="center" sx={{ cursor: "pointer" }}>
            <GitHubCalendar username="rudee-Sb"
                blockSize={7.4}
                blockMargin={3}
                fontSize={14} />
        </Box>
    </>)
}

export default ContriGraph