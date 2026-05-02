import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Home } from "lucide-react"; 
import NotFoundImage from "@/assets/images/page_not_found.png";

const NotFoundPage = () => {
    return (
        <div className="min-h-[85vh] flex flex-col items-center justify-center px-6  transition-colors duration-300">
            <div className=" w-full text-center space-y-8 z-10">
                <div className="relative w-full h-64 md:h-80 mx-auto">
                    <Image
                        src={NotFoundImage}
                        alt="SkillSphere 404"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>
                <div className="space-y-3">
                    <h1 className="text-6xl font-extrabold text-slate-900 dark:text-white tracking-tighter">
                        404
                    </h1>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-200">
                        Page Not Found
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mx-auto">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </div>
                <div className="flex items-center justify-center pt-4">
                    <Link href="/">
                        <Button
                            className="font-semibold px-10 py-6 rounded-lg bg-purple-600 "
                            startContent={<Home size={20} />}
                        >
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;