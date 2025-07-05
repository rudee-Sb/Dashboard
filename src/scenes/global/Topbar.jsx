import { Box, IconButton, useTheme } from '@mui/material'
import { useContext } from 'react';
import { colorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';

function Topbar() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(colorModeContext);

    return (<>
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box display="flex" bgcolor={colors.primary[400]} borderRadius="6px" alignItems="center" padding="3px">
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <SearchIcon sx={{ mr: 1, cursor: "pointer" }} />
            </Box>

            <Box display="flex" gap="4px">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {
                        theme.palette.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />
                    }

                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    </>);
}

export default Topbar