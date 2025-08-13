import { colorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard/Dashboard';
import NoteApp from './scenes/notes/NoteApp';
import Pomodoro from './scenes/Pomodoro';
import Calendar from './scenes/Calendar'
import Github from './scenes/Github'

function App() {

    const [theme, colorMode] = useMode();

    return (<>
        <colorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme} >
                <CssBaseline />
                <div className="app">
                    <Sidebar />
                    <main className="content">
                        <Topbar />
                        <Routes >
                            <Route path='/' element={ <Dashboard /> }></Route>
                            <Route path='/pomodoro' element={ <Pomodoro /> }></Route>
                            <Route path='/notes' element={ <NoteApp /> }></Route>
                            <Route path='/calendar' element={ <Calendar /> }></Route>
                            <Route path='/github' element={ <Github /> }></Route>
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </colorModeContext.Provider >
    </>)
}

export default App
