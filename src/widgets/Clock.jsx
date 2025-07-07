import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";
import { useState, useEffect } from "react";

function Clock() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interValId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interValId);
        }
    }, []);

    const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    let hours = time.getHours();
    let mins = time.getMinutes();
    const dayNum = time.getDay() - 1;
    const day = weekdays[dayNum];
    const date = time.getDate();
    const suffix = addSuffix(date);
    const monthNum = time.getMonth() - 1;
    const month = months[monthNum];

    hours = (hours < 10 ? "0" : "") + hours;
    mins = (mins < 10 ? "0" : "") + mins;

    function addSuffix(sufDate) {
        if (date >= 11 && date <= 13) {
            return 'th';
        }
        const lastDigit = date % 10;

        switch (lastDigit) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    }

    function displayTime() {
        return `${hours}:${mins}`;
    }

    return (<>
        <Box width="200px" height="100px" bgcolor={colors.primary[400]} borderRadius="10px" padding="10px" display="flex" alignItems="center" justifyContent="center" sx={{cursor:"pointer"}} ml="15px" mt="15px">
            <div className="clock-container" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <Typography variant="h1" fontSize="40px">{displayTime()}</Typography>
                <div className="clock-day-container">
                    <Typography variant="h5" color={colors.greenAccent[400]} >{day} | {date}{suffix} {month}</Typography>
                </div>
            </div>
        </Box>
    </>);
}

export default Clock