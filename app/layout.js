"use client"

import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import blueTheme from "../theme/blue";
import ReduxProvider from '@redux/provider';

import "@/content/style/header.scss";
import "@/content/style/footer.scss";
import "@/content/style/pin.scss";
import "@/content/style/style.scss";

export default function RootLayout({ children }) {

  const theme = blueTheme;

  return (
    <html lang="en">
      <head>
        <title>Interview Room</title>
      </head>
      <body>
        <AppRouterCacheProvider>
          <ReduxProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </ReduxProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
