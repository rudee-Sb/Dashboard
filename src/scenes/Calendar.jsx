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

    const [date, setDate] = useState({
        month: CurrentDate.getMonth(),
        year: CurrentDate.getFullYear(),
    });
    
    const daysInMonth = new Date(date.year, date.month + 1, 0).getDate();
    const firstDayOfMonth = new Date(date.year, date.month, 1).getDay();

    console.log(firstDayOfMonth);


    const nextMonth = () => {
        setDate(({ month, year }) => {
            if (month === 11) {
                return { month: 0, year: year + 1 };
            }
            return { month: month + 1, year };
        });
    };

    const prevMonth = () => {
        setDate(({ month, year }) => {
            if (month === 0) {
                return { month: 11, year: year - 1 };
            }
            return { month: month - 1, year };
        });
    };


    return (<>
        <Box m="20px">
            <Header title="CALENDAR" subtitle="Welcome to the Grid of Guilt."></Header>
            <Box width="100%" bgcolor={colors.primary[400]} padding="15px" borderRadius="10px" display="flex" alignItems="center" justifyContent="space-between" gap='10px' position="relative">
                {/* Calender box */}
                <Box bgcolor={colors.primary[500]} borderRadius="10px" display="flex" justifyContent="space-between" flexDirection="column" p="15px" width="52%">
                    <Box display="flex" flexDirection="row" alignItems="flex-start">
                        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                            <Box><Typography variant="h2" color={colors.grey[300]} pl="10px">{months[date.month]}, {date.year}</Typography></Box>
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
                    <Box borderRadius="10px" margin="20px 10px 0px 0px" display="flex" justifyContent="space-between" flexDirection="column" gap="20px">
                        <Box width="100%" display="flex">
                            {daysOfWeek.map((day) => <span className="weekdays-span" key={day}>{day}</span>)}
                        </Box>
                        <Divider />
                        <Box display="flex" flexWrap="wrap">
                            {[...Array(firstDayOfMonth).keys()].map((_, index) => (
                                <span className="days-span" key={`empty-${index}`} />
                            ))}
                            {[...Array(daysInMonth).keys()].map((day) => (
                                <span className={
                                    day + 1 === CurrentDate.getDate() && date.month === CurrentDate.getMonth() && date.year === CurrentDate.getFullYear() ? "currentday-span days-span" : "days-span"
                                } key={day + 1}>{day + 1}</span>
                            ))}
                        </Box>
                    </Box>
                    {/* event popup */}
                    {/* <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-center" rowGap="1.5rem" p="15px" borderRadius="10px" position="absolute" top="33%" left="2.5rem" bgcolor={colors.primary[400]} width="clamp(28rem, 21cqi, 40rem)"height="55%" sx={{aspectRatio:"10/9"}} boxShadow="0 0 8px 8px rgba(93, 124, 166, 0.2)">
                        <Box display="flex" columnGap="1rem" alignItems="center" mt="25px">
                            <Typography variant="h3" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.1rem">TIME</Typography>
                            <input type="number" name="hours" min={0} max={24} className="hours" />
                            <input type="number" name="minutes" min={0} max={60} className="minutes" />
                        </Box>
                        <textarea placeholder="Enter event text.." className="cal-textarea"></textarea>
                        <div className=""><button className="event-popup-btn">Add Event</button></div>
                        <IconButton className="close-popup"><ClearOutlinedIcon /></IconButton>
                    </Box> */}
                </Box>
                {/* Events view box */}
                <Box textAlign="center" gap="10px" p="10px" flex="1" height="-webkit-fill-available">
                    <Box><Typography variant="h3" mb="15px">EVENTS</Typography></Box>
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