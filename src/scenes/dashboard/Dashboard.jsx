import { useState } from "react";
import { Box } from "@mui/material";
import Header from "../global/Header";
import Clock from "../../widgets/Clock";
import ImagePins from "../../widgets/Pins";
import StickyNote from "../../widgets/StickyNote"
import WeeklyTasks from "../../widgets/WeeklyTasks";
import StatBox from "../components/StatBox";

function Dashboard() {

    const [tasks, setTasks] = useState([]);

    const completed = tasks.filter((t) => t.done).length;
    const total = tasks.length;

    return (<>
        <Box m="20px">
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Header title={"DASHBOARD"} subtitle={"Welcome Rudee !!"} />
            </Box>
            {/* {/* <ImagePins />
            <Clock />
            <StickyNote /> */}
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
                {/* Row 1 */}
                <Box gridColumn="span 3" display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="TASKS" completed={completed} total={total} />
                </Box>
                <Box gridColumn="span 3" display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="PROJECTS" completed="12" total="15" />
                </Box>
                <Box gridColumn="span 3" display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="WORKOUT" completed={"6"} total={"10"} />
                </Box>
                <Box gridColumn="span 3" display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="ASSIGNMENTS" completed={"3"} total={"11"} />
                </Box>
            </Box>
            {/* <WeeklyTasks onTasksUpdate={setTasks} /> */}
        </Box>
    </>);
}

export default Dashboard
