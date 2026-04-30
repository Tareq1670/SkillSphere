import { BookCheck, FileSpreadsheet, LaptopMinimalCheck } from "lucide-react";
import Image from "next/image";
import Learning1 from "../../../public/learning.jpg";
import Learning2 from "../../../public/learning2.jpg";
import Learning3 from "../../../public/learning3.jpg";

const Learning = () => {
    return (
        <div className="px-1 md:px-0 max-w-6xl mx-auto mt-5 md:mt-8 lg:mt-10">
            <div className="mb-8 space-y-2 flex items-center justify-center flex-col text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight light:text-white dark:text-white">
                    Master Your Schedule with{" "}
                    <span className="text-[#c421ff]">SkillSphere</span>
                </h2>
                <p className="text-zinc-400 dark:text-zinc-300 text-[14px] md:text-[16px]">
                    Efficiency is the bridge between goals and accomplishment.
                    Use these proven strategies to optimize your learning
                    journey.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="flex flex-col items-center justify-center text-center space-y-3 border p-10 dark:text-white light:text-black rounded-lg dark:border-zinc-700 light:border-zinc-800 backdrop-blur-2xl bg-[#ece9e2] dark:bg-zinc-800 transition-all duration-500 h-[380px] md:h-auto px-2 xl:px10">
                    <div className="bg-black dark:bg-white h-[50px] w-[50px] rounded-full flex items-center justify-center mb-10  transition-all duration-500">
                        <FileSpreadsheet className="text-cyan-400" />
                    </div>
                    <h2 className="text-2xl font-semibold">
                        The Eisenhower Matrix
                    </h2>
                    <p className="text-[14px] md:text-[16px] text-zinc-600 dark:text-zinc-300">
                        Categorize tasks into "Urgent" and "Important" to focus
                        your energy where it matters most and eliminate
                        time-wasters.
                    </p>
                </div>
                <div className="relative aspect-square w-full overflow-hidden dark:border-zinc-700 light:border-zinc-800 border rounded-lg">
                    <Image
                        src={Learning1}
                        alt="Learn image"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover "
                    />
                </div>
                <div className="flex flex-col items-center justify-center text-center space-y-3 border p-10 dark:text-white light:text-black rounded-lg dark:border-zinc-700 light:border-zinc-800 backdrop-blur-2xl bg-[#ece9e2] dark:bg-zinc-800 transition-all duration-500 h-[380px] md:h-auto px-2 xl:px10">
                    <div className="bg-black dark:bg-white h-[50px] w-[50px] rounded-full flex items-center justify-center mb-10  transition-all duration-500">
                        <BookCheck className="text-cyan-400" />
                    </div>
                    <h2 className="text-2xl font-semibold">
                        Pomodoro Technique
                    </h2>
                    <p className="text-[14px] md:text-[16px] text-zinc-600 dark:text-zinc-300">
                        Boost productivity by working in 25-minute sprints
                        followed by a 5-minute break. This keeps your brain
                        sharp and prevents burnout.
                    </p>
                </div>
                <div className="relative aspect-square w-full overflow-hidden dark:border-zinc-700 light:border-zinc-800 border rounded-lg">
                    <Image
                        src={Learning2}
                        alt="Learn image"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover "
                    />
                </div>
                <div className="flex flex-col items-center justify-center text-center space-y-3 border p-10 dark:text-white light:text-black rounded-lg dark:border-zinc-700 light:border-zinc-800 backdrop-blur-2xl bg-[#ece9e2] dark:bg-zinc-800 transition-all duration-500 h-[380px] md:h-auto px-2 xl:px10">
                    <div className="bg-black dark:bg-white h-[50px] w-[50px] rounded-full flex items-center justify-center mb-10  transition-all duration-500">
                        <LaptopMinimalCheck className="text-cyan-400" />
                    </div>
                    <h2 className="text-2xl font-semibold">
                        Digital Time Blocking
                    </h2>
                    <p className="text-[14px] md:text-[16px] text-zinc-600 dark:text-zinc-300">
                        Treat your learning hours like a non-negotiable
                        appointment. Schedule specific blocks in your digital
                        calendar for deep study.
                    </p>
                </div>
                <div className="relative aspect-square w-full overflow-hidden dark:border-zinc-700 light:border-zinc-800 border rounded-lg">
                    <Image
                        src={Learning3}
                        alt="Learn image"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover "
                    />
                </div>
            </div>
        </div>
    );
};

export default Learning;
