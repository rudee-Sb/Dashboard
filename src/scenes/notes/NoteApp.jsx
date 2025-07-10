import { Box, useTheme } from '@mui/material'
import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { tokens } from '../../theme';
import Notelist from './NoteList';
import Header from '../global/Header';

function NoteApp() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [notes, setNotes] = useState([{
        id: nanoid(),
        text: "First Note",
        date: "7/8/2025",
    }]);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-data'));
        console.log("saved", savedNotes)

        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
        localStorage.setItem('react-notes-data', JSON.stringify(newNotes));
        console.log(localStorage.getItem('react-notes-data'));
    }

    const delNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
        localStorage.setItem('react-notes-data', JSON.stringify(newNotes));
    }

    return (<>
        <Box m="20px">
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Header title={"NOTES APP"} subtitle={"Save your thoughts !!"} />
            </Box>
            <Notelist
                notes={notes} handleAddNote={addNote} handleDelNote={delNote}
            />
        </Box>
    </>)
}

export default NoteApp