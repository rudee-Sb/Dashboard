import { colorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import ContriGraph from './widgets/GithubContri';
import ImagePins from './widgets/Pins';
import Clock from './widgets/Clock';
import Dashboard from './scenes/dashboard/Dashboard';
import Pomodoro from './scenes/Pomodoro';

function App(){

    const [theme, colorMode] = useMode();

    return(<>
        <colorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme} >
                <CssBaseline/>
                <div className="app">
                    <Sidebar/>
                    <main className="content">
                        <Topbar />
                        {/* <Dashboard /> */}
                        <Pomodoro />
                        {/* <ImagePins /> */}
                        {/* <ContriGraph /> */}
                        {/* <Clock /> */}
                    </main>
                </div>
            </ThemeProvider>
        </colorModeContext.Provider>
    </>)
}

export default App