'use client';

import { ThemeProvider } from "next-themes";

const ThemeProviders = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    );
};

export default ThemeProviders;