import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import Header from "../global/Header";
import Clock from "../../widgets/Clock";
import ImagePins from "../../widgets/Pins";
import StickyNote from "../../widgets/StickyNote"
import WeeklyTasks from "../../widgets/WeeklyTasks";
import StatBox from "../components/StatBox";
import ContriGraph from "../../widgets/GithubContri";
import Music from "../../widgets/music/MusicPlayer";

function Dashboard() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [tasks, setTasks] = useState([]);

    const completed = tasks.filter((t) => t.done).length;
    const total = tasks.length;

    return (<>
        <Box m="20px">
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Header title={"DASHBOARD"} subtitle={"Welcome Rudee !!"} />
            </Box>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
                {/* Row 1 */}
                <Box gridColumn="span 3" display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="TASKS" completed={completed} total={total} icon={<AssignmentOutlinedIcon />} />
                </Box>
                <Box gridColumn="span 3" display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="PROJECTS" completed="12" total="15" icon={<Inventory2OutlinedIcon />} />
                </Box>
                <Box gridColumn="span 3" display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="WORKOUT" completed={"6"} total={"10"} icon={<FitnessCenterOutlinedIcon />} />
                </Box>
                <Box gridColumn="span 3" display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="ASSIGNMENTS" completed={"3"} total={"11"} icon={<AssignmentLateOutlinedIcon />} />
                </Box>

                {/* Row 2 */}
                <Box gridColumn="span 7" height="145px" >
                    <ContriGraph ></ContriGraph>
                </Box>
                <Box gridColumn="span 4" height="145px" >
                    <WeeklyTasks onTasksUpdate={setTasks} />
                </Box>
                <Box gridColumn="span 1" height="145px">
                    
                </Box>

                {/* Row 3 */}
                <Box gridColumn="span 3">
                    <Clock ></Clock>
                </Box>
                <Box gridColumn="span 3">
                    <StickyNote />
                </Box>
                <Box gridColumn="span 2">
                    <Music />
                </Box>
                <Box gridColumn="span 2">
                    <ImagePins />
                </Box>
                <Box gridColumn="span 2">
                    <ImagePins />
                </Box>
            </Box>
        </Box>
    </>);
}

export default Dashboard
