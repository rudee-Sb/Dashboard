import { useState } from "react";
import { Box } from "@mui/material";
import Header from "../global/Header";
import Clock from "../../widgets/Clock";
import ImagePins from "../../widgets/Pins";
import StickyNote from "../../widgets/StickyNote"
import WeeklyTasks from "../../widgets/WeeklyTasks";

function Dashboard() {

    const [tasks, setTasks] = useState([]);

    const completed = tasks.filter((t) => t.done).length;
    const total = tasks.length;

    return (<>
        <Box m="20px">
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Header title={"DASHBOARD"} subtitle={"Welcome Rudee !!"} />
            </Box>
            {/* <ImagePins />
            <Clock />
            <StickyNote /> */}
            <WeeklyTasks onTasksUpdate={setTasks} />
        </Box>
    </>);
}

export default Dashboard
