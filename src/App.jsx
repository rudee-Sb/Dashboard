import { colorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Calender from './widgets/GithubContri';
import ImagePins from './widgets/Pins';

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
                        <ImagePins />
                    </main>
                </div>
            </ThemeProvider>
        </colorModeContext.Provider>
    </>)
}

export default App