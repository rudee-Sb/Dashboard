import { Box, Typography, useTheme, IconButton, TextField, Checkbox, List, ListItem, ListItemText, ListItemSecondaryAction, Divider } from "@mui/material";
import { tokens } from "../theme";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import React, { useState, useEffect } from "react";

function WeeklyTasks({ onTasksUpdate }) {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("react-tasks-data"));
        if (Array.isArray(savedTasks)) {
            setTasks(savedTasks);
        }
    }, []);

    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem("react-tasks-data", JSON.stringify(tasks));
            onTasksUpdate(tasks); // only fire when there's something to update
        }
    }, [tasks]);

    const handleAddTask = () => {
        if (newTask.trim()) {
            const updatedTasks = [...tasks, { text: newTask.trim(), done: false }];
            setTasks(updatedTasks);
            setNewTask("");
            onTasksUpdate(updatedTasks);
        }
    }

    const handleDelTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        onTasksUpdate(updatedTasks);
    }

    const handleToggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, done: !task.done } : task
        );
        setTasks(updatedTasks);
        onTasksUpdate(updatedTasks);
    };

    return (<>
        <Box width="100%" height="100%" display="flex" flexDirection="column" padding="15px" borderRadius="10px" bgcolor={colors.primary[400]}>
            <Typography variant="h4" fontWeight="600" fontSize="20px" sx={{ mb: "10px", whiteSpace: "nowrap" }}>
                Weekly Tasks
            </Typography>
            <Box display="flex" gap={1} mt="5px" height="50px">
                <TextField
                    size="small"
                    placeholder="New Task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    fullWidth
                />
                <IconButton onClick={handleAddTask}>
                    <AddOutlinedIcon htmlColor="#a3a3a3" />
                </IconButton>
            </Box>

            <List className="Weekely-tasks-list" dense sx={{ overflowY: "auto", flexGrow: 1 }}>
                {tasks.map((task, index) => (
                    <React.Fragment key={index}>
                        <ListItem>
                            <Checkbox
                                edge="start"
                                checked={task.done}
                                onChange={() => handleToggleTask(index)}
                            />
                            <ListItemText primary={task.text} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" onClick={() => handleDelTask(index)}>
                                    <ClearOutlinedIcon htmlColor="#ce4c66" ></ClearOutlinedIcon>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </Box>
    </>);
}

export default WeeklyTasks