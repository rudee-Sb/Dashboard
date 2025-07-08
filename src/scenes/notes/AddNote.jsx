import { Box, useTheme } from "@mui/material"
import { tokens } from "../../theme";
import { useState } from "react"

function AddNote({ handleAddNote, w, h, fs }) {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [noteText, setNoteText] = useState("");
    const characterLimit = 150;

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0)
        setNoteText(event.target.value);
    }

    const handleSave = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText("");
        }
    }

    return (<>
        <Box bgcolor={colors.pinkAccent[300]} borderRadius="10px" padding="10px" height={h} width={w} display="flex" flexDirection="column" justifyContent="space-between">
            <textarea  rows="8" cols="10" value={noteText} placeholder="Add a Note.." style={{ border: "none", resize: "none", backgroundColor: "#e294a3", caretColor:"#292929", color:"#292929" }} onChange={handleChange}></textarea>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color:"black" }}>
                <small style={{fontSize:{fs}}}>{characterLimit - noteText.length} Remaining</small>
                <button className="note-save-btn" onClick={handleSave} >SAVE</button>
            </div>
        </Box>
    </>)
}

export default AddNote