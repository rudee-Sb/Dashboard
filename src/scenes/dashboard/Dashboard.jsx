import Header from "../global/Header";
import { Box } from "@mui/material";

function Dashboard() {

    return(<>
        <Box m="20px">
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Header title={"DASHBOARD"} subtitle={"Welcome Rudee !!"} />
            </Box>
        </Box>
    </>);
}

export default Dashboard
