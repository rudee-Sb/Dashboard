import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from "../../theme";

// home icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';

// project work icons
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/Linkedin";

// widget icons
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";
// import CalenderTodayOutlinedIcon from '@mui/icons-material/CalenderTodayOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, selected, setSelected, icon }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem active={selected === title} style={{ color: colors.grey[100] }} onClick={() => setSelected(title)} icon={icon}>
            <Typography variant="h5">{title}</Typography>
        </MenuItem>
    )
}

function Sidebarr() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');

    return (<>
        <Box sx={{
            "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
            },
            "& pro-icon-wrapper": {
                backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important",
            },
            "& .pro-inner-item.active": {
                color: "#6870fa !important",
            }
        }}>
            <Sidebar collapsed={isCollapsed} backgroundColor={colors.primary[400]}>
                <Menu iconShape="square" >
                    <MenuItem
                        className="menuitem"
                        onClick={() => { setIsCollapsed(!isCollapsed) }}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box display="flex" justifyContent="space-between" alignItems='center' ml="15px">
                                <Typography variant="h3" color={colors.grey[100]}>Dashboard</Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed &&
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img src={`src\\assets\\user-prof.jpg`} alt="User-Profile" width="80px" height="80px"
                                    style={{ cursor: "pointer", borderRadius: "50%" }} />
                            </Box>

                            <Box textAlign="center" display="flex" flexDirection="column" alignItems="center">
                                {/* <Typography variant="h3" color={colors.grey[100]} fontWeight="bold" sx={{ marginTop: "10px", fontSize: "18px" }}>RUDE</Typography> */}
                                <Typography variant="p" color={colors.greenAccent[500]} fontWeight="600" sx={{ marginTop: "8px", fontSize: "12px" }}>RUDEE</Typography>
                            </Box>
                        </Box>
                    }
                    {
                        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                            <Typography variant="h5" display={!isCollapsed ? "block" : "none"} color={colors.grey[300]} sx={{ m: "15px 0px 5px 20px" }}>USER</Typography>
                            <Item title="Profile" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected}></Item>
                            <Item title="Contact" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected}></Item>
                            <Item title="Help" icon={<HelpOutlinedIcon />} selected={selected} setSelected={setSelected}></Item>
                            <Typography variant="h5" color={colors.grey[300]} display={!isCollapsed ? "block" : "none"} sx={{ m: "15px 0px 5px 20px" }}>PROJECTS</Typography>
                            <Item title="Work" icon={<QuizOutlinedIcon />} selected={selected} setSelected={setSelected}></Item>
                            <Item title="Github" icon={<GitHubIcon />} selected={selected} setSelected={setSelected}></Item>
                            <Item title="Linkedin" icon={<LinkedInIcon />} selected={selected} setSelected={setSelected}></Item>
                            <Typography variant="h5" color={colors.grey[300]} display={!isCollapsed ? "block" : "none"} sx={{ m: "15px 0px 5px 20px" }}>WIDGETS</Typography>
                            <Item title="Stop Watch" icon={<LockClockOutlinedIcon />} selected={selected} setSelected={setSelected}></Item>
                            <Item title="Notes" icon={<NotesOutlinedIcon />} selected={selected} setSelected={setSelected}></Item>

                        </Box>
                    }

                </Menu>
            </Sidebar>

        </Box>
    </>);
}

export default Sidebarr