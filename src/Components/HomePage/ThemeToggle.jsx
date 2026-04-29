"use client";
import { Moon, Sun } from "@gravity-ui/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;

    return <div className=" cursor-pointer">{theme === "dark" ? <Sun onClick={() => setTheme("light")} /> : <Moon onClick={() => setTheme("dark")} />}</div>;
};

export default ThemeToggle;
