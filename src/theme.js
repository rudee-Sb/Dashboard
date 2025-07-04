import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color tokens for light and dark theme
export const tokens = (mode) => ({
    ...(mode === 'dark' ? {
        grey: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414"
        },
        primary: {
            100: "#d0d1d5",
            200: "#a1a4ab",
            300: "#727681",
            400: "#434957",
            500: "#141b2d",
            600: "#101624",
            700: "#0c101b",
            800: "#080b12",
            900: "#040509"
        },
        pinkAccent: {
            100: "#f5dbe0",
            200: "#ebb7c2",
            300: "#e294a3",
            400: "#d87085",
            500: "#ce4c66",
            600: "#a53d52",
            700: "#7c2e3d",
            800: "#521e29",
            900: "#290f14"
        },
        greenAccent: {
            100: "#dbf6f8",
            200: "#b7edf1",
            300: "#92e3e9",
            400: "#6edae2",
            500: "#4ad1db",
            600: "#3ba7af",
            700: "#2c7d83",
            800: "#1e5458",
            900: "#0f2a2c"
        },
        blueAccent: {
            100: "#dcdefe",
            200: "#b9bdfe",
            300: "#979cfd",
            400: "#747bfd",
            500: "#515afc",
            600: "#4148ca",
            700: "#313697",
            800: "#202465",
            900: "#101232"
        },
    } : {
        grey: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0"
        },
        primary: {
            100: "#040509",
            200: "#080b12",
            300: "#0c101b",
            400: "#f2f0f0",
            500: "#141b2d",
            600: "#434957",
            700: "#727681",
            800: "#a1a4ab",
            900: "#d0d1d5"
        },
        pinkAccent: {
            100: "#290f14",
            200: "#521e29",
            300: "#7c2e3d",
            400: "#a53d52",
            500: "#ce4c66",
            600: "#d87085",
            700: "#e294a3",
            800: "#ebb7c2",
            900: "#f5dbe0"
        },
        greenAccent: {
            100: "#0f2a2c",
            200: "#1e5458",
            300: "#2c7d83",
            400: "#3ba7af",
            500: "#4ad1db",
            600: "#6edae2",
            700: "#92e3e9",
            800: "#b7edf1",
            900: "#dbf6f8"
        },
        blueAccent: {
            100: "#101232",
            200: "#202465",
            300: "#313697",
            400: "#4148ca",
            500: "#515afc",
            600: "#747bfd",
            700: "#979cfd",
            800: "#b9bdfe",
            900: "#dcdefe"
        },
    })
})

// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark' ? {
                primary: {
                    main: colors.primary[500]
                },
                secondary: {
                    main: colors.blueAccent[500]
                },
                neutral: {
                    main: colors.grey[500],
                    light: colors.grey[100],
                    dark: colors.grey[700]
                },
                background: {
                    default: colors.primary[500]
                }
            } : {
                primary: {
                    main: colors.primary[100]
                },
                secondary: {
                    main: colors.blueAccent[500]
                },
                neutral: {
                    main: colors.grey[500],
                    light: colors.grey[100],
                    dark: colors.grey[700]
                },
                background: {
                    default: '#fcfcfc',
                }
            })
        },
        typography: {
            fontFamily: 'monospace',
            fontSize: 14,
            h1: {
                fontFamily: 'monospace',
                fontSize: 40,
            },
            h2: {
                fontFamily: 'monospace',
                fontSize: 32,
            },
            h3: {
                fontFamily: 'monospace',
                fontSize: 24,
            },
            p: {
                fontFamily: 'monospace',
                fontSize: 16,
            },
        }
    }
}

// create context for color mode
export const colorModeContext = createContext({
    toggleColorMode : () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState('dark');

    const colorMode = useMemo(
        () => ({
            toggleColorMode : () => {
                setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
            }
        }), []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
}