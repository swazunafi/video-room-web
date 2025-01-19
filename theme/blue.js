"use client";
import { createTheme } from "@mui/material/styles";

const blueTheme = createTheme({
    cssVariables: true,
    palette: {
        mode: "light",
        primary: {
            main: '#008000',
        },
        secondary: {
            main: '#f7f7f7',
        }
    }
});

export default blueTheme;
