import Note from "./Note";
import AddNote from "./AddNote";
import { Box } from "@mui/material";

function Notelist({ notes, handleAddNote, handleDelNote }) {
    return (<>
        <Box display="grid" sx={{ rowGap: "2rem" }} gridTemplateColumns="repeat(auto-fit, minmax(330px, 1fr))"  maxWidth="1200px" margin=" 20px 0">
            {notes.map((note) => (
                <Note
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDelNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote} w="300px" h="170px" fs="10px" />
        </Box>

    </>);
}

export default Notelist