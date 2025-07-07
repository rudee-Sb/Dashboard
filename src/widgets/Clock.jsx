import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";
import { useState, useEffect } from "react";

function Clock() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(
            setTime(new Date())
            , 1000)
    }, [time]);

    const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    let hours = time.getHours();
    let mins = time.getMinutes();
    const dayNum = time.getDay() - 1;
    const day = weekdays[dayNum];
    const date = time.getUTCDate();
    const monthNum = time.getMonth() - 1;
    const month = months[monthNum];

    hours = (hours < 10 ? "0" : "") + hours;
    mins = (mins < 10 ? "0" : "") + mins;

    function displayTime() {
        return `${hours}:${mins}`;
    }

    return (<>
        <Box width="200px" height="100px" bgcolor={colors.primary[400]} borderRadius="10px" padding="10px" display="flex" alignItems="center" justifyContent="center" ml="15px" mt="15px">
            <div className="clock-container" style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                <Typography variant="h1" fontSize="40px">{displayTime()}</Typography>
                <div className="clock-day-container">
                    <Typography variant="h5" color={colors.greenAccent[400]} >{day} | {date}th {month}</Typography>
                </div>
            </div>
        </Box>
    </>);
}

export default Clock