
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
    MdEmail,
    MdLocationOn,
    MdMobileFriendly,
    MdPhone,
} from "react-icons/md";

const Footer = () => {
    return (
        <footer className="mt-10 md:mt-20">
            <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl p-6 md:p-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h2 className="text-2xl font-black tracking-tight bg-gradient-to-r from-[#c240e2] to-[#7514ea] bg-clip-text text-transparent">
                                SkillSphere
                            </h2>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">
                                Learn smarter with SkillSphere. Upgrade your
                                skills with modern courses and real-world
                                knowledge.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4 text-zinc-800 dark:text-zinc-200">
                                Contact Info
                            </h3>
                            <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                                <p className="flex items-center gap-2">
                                    <MdPhone className="text-[#c240e2]" /> +880
                                    1234 567890
                                </p>
                                <p className="flex items-center gap-2">
                                    <MdMobileFriendly className="text-[#c240e2]" />{" "}
                                    +880 9876 545122
                                </p>
                                <p className="flex items-center gap-2">
                                    <MdEmail className="text-[#c240e2]" />{" "}
                                    support@skillsphere.com
                                </p>
                                <p className="flex items-center gap-2">
                                    <MdLocationOn className="text-[#c240e2]" />{" "}
                                    Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4 text-zinc-800 dark:text-zinc-200">
                                Social Links
                            </h3>
                            <div className="flex items-center gap-3">
                                <Link
                                    href="https://www.facebook.com/tariqulislam.tareq.96558"
                                    target="_blank"
                                    className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-[#c240e2] hover:text-white transition-all duration-300"
                                >
                                    <FaFacebookF />
                                </Link>
                                <Link
                                    href="https://github.com/Tareq1670"
                                    target="_blank"
                                    className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-[#c240e2] hover:text-white transition-all duration-300"
                                >
                                    <FaGithub />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/tariqul-islam-tareq/"
                                    target="_blank"
                                    className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-[#c240e2] hover:text-white transition-all duration-300"
                                >
                                    <FaLinkedinIn />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="my-8 border-t border-zinc-200 dark:border-zinc-800"></div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                        <p>
                            © {new Date().getFullYear()} SkillSphere. All rights
                            reserved  by Tariqul Islam Tareq.
                        </p>

                        <div className="flex items-center gap-6">
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;