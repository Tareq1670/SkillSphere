import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/HomePage/Navbar";
import ThemeProviders from "@/Providers/ThemeProviders";
import Footer from "@/Components/HomePage/Footer";
import { Slide, ToastContainer } from "react-toastify";

const inter = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});

export const metadata = {
    title: "Home | SkillSphere",
    description:
        "SkillSphere is a modern online learning platform designed to bridge the gap between skills and goals. Explore expert-led courses and interactive content to master new technologies.",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${inter.className} h-full antialiased`}
        >
            <body className="bg-background text-foreground">
                <ThemeProviders>
                    <Navbar />
                    <main className="pt-24 md:pt-20 container mx-auto">
                        {children}
                    </main>
                    <Footer />
                </ThemeProviders>
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    transition={Slide}
                />
            </body>
        </html>
    );
}
