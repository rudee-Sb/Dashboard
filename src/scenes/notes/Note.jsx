import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined"
import { IconButton, Box } from "@mui/material"

function Note({ id, text, date, handleDeleteNote }) {

    return (<>
        <Box bgcolor="#fef68a" color="black" borderRadius="10px" padding="10px" height="170px" width="300px" display="flex" flexDirection="column" justifyContent="space-between" whiteSpace="pre-wrap">
            <span>{text}</span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <small>{date}</small>
                <IconButton onClick={() => { handleDeleteNote(id) }}>
                    <DeleteForeverOutlinedIcon fontSize="1.3rem" sx={{ color: "black" }}></DeleteForeverOutlinedIcon>
                </IconButton>
            </div>
        </Box>
    </>)
}

export default Note