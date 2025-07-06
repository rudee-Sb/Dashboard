import { colorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Calender from './scenes/global/GithubContri';

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
                    </main>
                </div>
            </ThemeProvider>
        </colorModeContext.Provider>
    </>)
}

export default App