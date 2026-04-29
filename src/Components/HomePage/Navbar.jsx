"use client";
import Link from "next/link";
import NavLogin from "./NavLogin";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";
import { Divide as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const pathName = usePathname();
    console.log(pathName);

    const getActiveLink = (path) => {
        return path === pathName
            ? "border border-zinc-400 backdrop-blur-2xl "
            : "";
    };

    useEffect(() => {
        setOpen(false);
    }, [pathName]);

    const navLinks = (
        <>
            <li>
                <Link
                    className={`text-sm font-medium text-zinc-600 dark:text-zinc-300 dark:hover:text-[#c240e2] py-2 px-4  rounded-full ${getActiveLink("/")}`}
                    href={"/"}
                >
                    Home
                </Link>
            </li>

            <li>
                <Link
                    className={`text-sm font-medium text-zinc-600 dark:text-zinc-300 dark:hover:text-[#c240e2] py-2 px-4 rounded-full ${getActiveLink("/courses")}`}
                    href={"/courses"}
                >
                    Courses
                </Link>
            </li>

            <li>
                <Link
                    className={`text-sm font-medium text-zinc-600 dark:text-zinc-300 dark:hover:text-[#c240e2] py-2 px-4 rounded-full ${getActiveLink("/my-profile")}`}
                    href={"/my-profile"}
                >
                    My Profile
                </Link>
            </li>
        </>
    );

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 h-screen w-screen bg-accent/5 backdrop-blur-sm z-40"
                    onClick={() => setOpen(false)}
                    onTouchStart={() => setOpen(false)}
                ></div>
            )}
            <header className="fixed top-4 inset-x-0 z-40 px-4">
                <nav className="max-w-6xl mx-auto flex items-center justify-between px-2 md:px-6 py-1 md:py-3 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] rounded-full transition-all duration-300">
                    <div className="flex md:hidden">
                        <Hamburger
                            toggle={setOpen}
                            toggled={isOpen}
                            size={24}
                            color="#c240e2"
                        />
                    </div>

                    <div className="hidden md:flex items-center group">
                        <Link
                            href="/"
                            className="text-2xl font-black tracking-tighter"
                        >
                            <h2 className="bg-gradient-to-r from-[#c240e2] to-[#7514ea] bg-clip-text text-transparent hover:from-[#7514ea] hover:to-[#c240e2] transition-all duration-500">
                                SkillSphere
                            </h2>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <ul className="flex items-center">{navLinks}</ul>
                    </div>

                    {isOpen ? (
                        <div className="block md:hidden absolute top-15 -left-4 w-[200px] bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] rounded-lg p-4 py-8 transition-all durtion-500 zoom-in-50">
                            <Link
                                href="/"
                                className="text-2xl text-center font-black tracking-tighter"
                            >
                                <h2 className="bg-gradient-to-r from-[#c240e2] to-[#7514ea] bg-clip-text text-transparent hover:from-[#7514ea] hover:to-[#c240e2] transition-all duration-500 pb-4">
                                    SkillSphere
                                </h2>
                            </Link>
                            <ul className="flex flex-col space-y-4 items-center ">
                                {navLinks}
                            </ul>
                        </div>
                    ) : (
                        <div className="block md:hidden absolute top-15 -left-60 w-[200px] bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] rounded-lg transition-all duration-500 opacity-0">
                            <ul className="flex flex-col space-y-2 items-center">
                                {navLinks}
                            </ul>
                        </div>
                    )}

                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                            <ThemeToggle />
                        </div>

                        <div className="flex items-center transform hover:scale-105 transition-transform">
                            <NavLogin />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
