import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from "../../theme";
import { NavLink } from "react-router-dom";

import user_prof from "../../assets/user-prof.jpg";

import NavLinkAdapter from "./NavLinkAdapter";

// home icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

// project work icons
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/Linkedin";

// widget icons
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, selected, setSelected, icon, to }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            component={<NavLinkAdapter />}
            to={to}
            icon={icon}
            active={selected === title}
            onClick={() => setSelected(title)}
            style={{ color: colors.grey[100] }}
        >
            <Typography variant="h5">{title}</Typography>
        </MenuItem>
    );
};



function Sidebarr() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');

    return (<>
        <Box sx={{
            "& .ps-menuitem-root:hover": {
                backgroundColor: "transparent !important"
            },
            "& .ps-menuitem-root.ps-active": {
                backgroundColor: "transparent !important", // remove ugly highlight
                color: "#00FFCC !important", // your neon glow or brand tone
            },
            "& .ps-menuitem-root.ps-active .ps-menuitem-icon": {
                color: "#00FFCC !important",
            },
            ".ps-menuitem-root.ps-active .ps-menuitem-label": {
                color: "#00FFCC !important",
            },
            ".css-1wvake5.ps-collapsed .css-2bdxkn": {
                borderBottomRightRadius: "24px !important",
                paddingBottom: "10px !important",
                border: "none !important"
            },
            ".css-1wvake5.ps-collapsed": {
                borderBottomRightRadius: "27px !important",
                borderRight: "1.4px solidrgba(239, 239, 239, 0.77) !important"
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
                            <Box display="flex" justifyContent="space-between" alignItems='center' ml="15px" height="75px" >
                                <Typography variant="h3" fontSize="20px" fontWeight="500" color={colors.grey[100]}>Dashboard</Typography>
                                <IconButton sx={{ padding: "9px" }} onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed &&
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img src={user_prof} alt="User-Profile" width="80px" height="80px"
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
                            <Typography variant="h5" fontSize={!isCollapsed ? "14px" : "12px"} margin={!isCollapsed ? "15px 0px 5px 20px" : "15x 0 0 0"} textAlign={!isCollapsed ? null : "center"} color={colors.grey[300]} >USER</Typography>
                            <Item title="Profile" to="/profile" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected}></Item>
                            <Item title="Contact" to="/contact" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected}></Item>
                            <Item title="Dashboard" to="/" icon={<DashboardOutlinedIcon />} selected={selected} setSelected={setSelected}></Item>
                            <Typography variant="h5" fontSize={!isCollapsed ? "14px" : "12px"} margin={!isCollapsed ? "15px 0px 5px 20px" : "15px 0 0 0"} textAlign={!isCollapsed ? null : "center"} color={colors.grey[300]} >PROJECTS</Typography>
                            <Item title="Work" to="/projects" icon={<QuizOutlinedIcon />} selected={selected} setSelected={setSelected}></Item>
                            <Item title="Github" to="/github" icon={<GitHubIcon />} selected={selected} setSelected={setSelected}></Item>
                            <Item title="Linkedin" to="/socials" icon={<LinkedInIcon />} selected={selected} setSelected={setSelected}></Item>
                            <Typography variant="h5" fontSize={!isCollapsed ? "14px" : "12px"} margin={!isCollapsed ? "15px 0px 5px 20px" : "15px 0 0 0"} textAlign={!isCollapsed ? null : "center"} color={colors.grey[300]} >UTILITIES</Typography>
                            <Item title="Study Timer" to="/pomodoro" icon={<LockClockOutlinedIcon />} selected={selected} setSelected={setSelected}></Item>
                            <Item title="Notes" to="/notes" icon={<EditNoteOutlinedIcon />} selected={selected} setSelected={setSelected}></Item>
                            <Item title="Calendar" to="/calendar" icon={<CalendarMonthOutlinedIcon />} selected={selected} setSelected={setSelected}></Item>
                            <Item title="Random" to="/random" icon={<EditNoteOutlinedIcon />} selected={selected} setSelected={setSelected}></Item>
                        </Box>
                    }

                </Menu>
            </Sidebar>

        </Box>
    </>);
}

export default Sidebarr
