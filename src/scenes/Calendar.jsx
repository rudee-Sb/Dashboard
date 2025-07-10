import Header from "./global/Header";
import { Box, useTheme, Typography, IconButton, Divider } from "@mui/material";
import { tokens } from "../theme";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined"
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined"
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useState } from "react";

function Calendar() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const CurrentDate = new Date();

    const [currentMonth, setCurrentMonth] = useState(CurrentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(CurrentDate.getFullYear());

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    console.log(firstDayOfMonth);


    const prevMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
        setCurrentYear((prevYear) => (currentMonth === 0 ? prevYear - 1 : prevYear));
    }

    const nextMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
        setCurrentYear((prevYear) => (prevMonth === 11 ? prevYear + 1 : prevYear));
    }

    return (<>
        <Box m="20px">
            <Header title="CALENDAR" subtitle="Welcome to the Grid of Guilt."></Header>
            <Box width="100%" bgcolor={colors.primary[400]} padding="15px" borderRadius="10px" display="flex" alignItems="center" justifyContent="space-between" gap='10px' position="relative">
                {/* Calender box */}
                <Box bgcolor={colors.primary[500]} borderRadius="10px" display="flex" justifyContent="space-between" flexDirection="column" p="15px" width="52%">
                    <Box display="flex" flexDirection="row" alignItems="flex-start">
                        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                            <Box><Typography variant="h2" color={colors.grey[300]} pl="10px">{months[currentMonth]}, {currentYear}</Typography></Box>
                            <Box display="flex" alignItems="center">
                                <IconButton sx={{ padding: "6px !important" }} onClick={prevMonth}>
                                    <ArrowCircleLeftOutlinedIcon htmlColor="#c2c2c2" />
                                </IconButton>

                                <IconButton sx={{ padding: "6px !important" }} onClick={nextMonth}>
                                    <ArrowCircleRightOutlinedIcon htmlColor="#c2c2c2" />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                    <Box borderRadius="10px" margin="20px 0px" display="flex" justifyContent="space-between" flexDirection="column" gap="20px">
                        <Box width="100%" display="flex">
                            {daysOfWeek.map((day) => <span className="weekdays-span" key={day}>{day}</span>)}
                        </Box>
                        <Divider />
                        <Box display="flex" flexWrap="wrap">
                            {[...Array(firstDayOfMonth).keys()].map((_, index) => (
                                <span key={`empty-${index}`} />
                            ))}
                            {[...Array(daysInMonth).keys()].map((day) => (
                                <span className={
                                    day + 1 === CurrentDate.getDate() && currentMonth === CurrentDate.getMonth() && currentYear === CurrentDate.getFullYear() ? "currentday-span days-span" : "days-span"
                                } key={day + 1}>{day + 1}</span>
                            ))}
                        </Box>
                    </Box>
                    {/* event popup */}
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-center" rowGap="1.5rem" p="15px" borderRadius="10px" position="absolute" top="33%" left="2.5rem" bgcolor={colors.primary[400]} width="clamp(28rem, 21cqi, 40rem)"height="55%" sx={{aspectRatio:"10/9"}} boxShadow="0 0 8px 8px rgba(93, 124, 166, 0.2)">
                        <Box display="flex" columnGap="1rem" alignItems="center" mt="25px">
                            <Typography variant="h3" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.1rem">TIME</Typography>
                            <input type="number" name="hours" min={0} max={24} className="hours" />
                            <input type="number" name="minutes" min={0} max={60} className="minutes" />
                        </Box>
                        <textarea placeholder="Enter event text.." className="cal-textarea"></textarea>
                        <div className=""><button className="event-popup-btn">Add Event</button></div>
                        <IconButton className="close-popup"><ClearOutlinedIcon /></IconButton>
                    </Box>
                </Box>
                {/* Events box */}
                <Box display="flex" alignItems="center" justifyContent="flex-start" flexDirection="column" gap="10px" p="10px" flex="1">
                    <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" p="15px" borderRadius="10px" bgcolor={colors.greenAccent[700]}>
                        <Box display="flex" textAlign="center" flexDirection="column">
                            <Typography variant="h5">May 15, 2025</Typography>
                            <Divider />
                            <Typography variant="h5">10:00</Typography>
                        </Box>
                        <Box><Typography variant="h4" sx={{ overflowWrap: "break-word" }}>Meeting with Tom</Typography></Box>
                        <Box display="flex" alignItems="center">
                            <IconButton sx={{ padding: "3px !important" }}><EditOutlinedIcon /></IconButton>
                            <IconButton sx={{ padding: "3px !important" }}><ClearOutlinedIcon /></IconButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>)
}

export default Calendar