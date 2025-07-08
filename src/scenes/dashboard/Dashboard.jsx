import Header from "../global/Header";
import { Box } from "@mui/material";
import Clock from "../../widgets/Clock";
import ImagePins from "../../widgets/Pins";
import StickyNote from "../../widgets/StickyNote"

function Dashboard() {

    return (<>
        <Box m="20px">
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Header title={"DASHBOARD"} subtitle={"Welcome Rudee !!"} />
            </Box>
            <ImagePins />
            <Clock />
            <StickyNote />
        </Box>
    </>);
}

export default Dashboard
