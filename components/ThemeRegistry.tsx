"use client";

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { poppins, aglatia } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: COLORS.SECONDARY, // Accent color (champagne cream)
      contrastText: COLORS.PRIMARY,
    },
    secondary: {
      main: COLORS.TERITARY, // Dark slate grey
      contrastText: COLORS.SECONDARY,
    },
    background: {
      default: COLORS.PRIMARY, // Rich warm brown
      paper: COLORS.TERITARY, // Dark slate grey
    },
    text: {
      primary: COLORS.SECONDARY,
      secondary: "rgba(255, 236, 212, 0.7)",
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    h1: {
      fontFamily: aglatia.style.fontFamily,
      fontWeight: 600,
    },
    h2: {
      fontFamily: aglatia.style.fontFamily,
      fontWeight: 600,
    },
    h3: {
      fontFamily: aglatia.style.fontFamily,
      fontWeight: 600,
    },
    h4: {
      fontFamily: aglatia.style.fontFamily,
      fontWeight: 600,
    },
    h5: {
      fontFamily: aglatia.style.fontFamily,
      fontWeight: 600,
    },
    h6: {
      fontFamily: aglatia.style.fontFamily,
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: "10px 24px",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: `0 0 15px ${COLORS.SECONDARY}`,
            transform: "translateY(-1px)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 236, 212, 0.3)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 236, 212, 0.6)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: COLORS.SECONDARY,
          },
        },
      },
    },
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
