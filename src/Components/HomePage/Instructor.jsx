import {
    LogoGithub,
    LogoLinkedin,
    StarFill,
    Display,
    Persons,
} from "@gravity-ui/icons";
import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Instructor = ({ instructor }) => {
    const {
        name,
        role,
        total_students,
        total_courses,
        rating,
        bio,
        image,
        socials,
    } = instructor;

    return (
        <div className="group bg-gray-50/50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-lg p-6 transition-all duration-500 hover:bg-white dark:hover:bg-white/10 hover:border-[#c421ff]/20 hover:shadow-lg dark:hover:shadow-none">

            <div className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-1 border-[#c421ff]/20 p-1 group-hover:scale-105 transition-transform duration-500">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            sizes="96px"
                            className="rounded-full object-cover p-1 bg-gray-200 dark:bg-gray-800"
                        />
                    </div>
                    <Chip className="absolute -bottom-2 -right-1 bg-[#c421ff] text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg">
                        <StarFill width={10} height={10} />
                        <span className="font-bold">{rating}</span>
                    </Chip>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {name}
                </h3>
                <p className="text-sm font-semibold text-[#c421ff] mt-1 mb-3 uppercase tracking-wide">
                    {role}
                </p>

                <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-5 mb-6 px-2 line-clamp-2">
                    {bio}
                </p>

                <div className="grid grid-cols-2 gap-3 w-full mb-6">
                    <div className="bg-gray-100/50 dark:bg-white/5 rounded-2xl p-3 flex flex-col items-center border border-gray-100 dark:border-white/5 group-hover:border-[#c421ff]/20 transition-colors">
                        <Persons
                            className="text-gray-500 dark:text-gray-400 mb-1"
                            width={16}
                            height={16}
                        />
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                            {total_students}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500 font-semibold">
                            Students
                        </span>
                    </div>

                    <div className="bg-gray-100/50 dark:bg-white/5 rounded-2xl p-3 flex flex-col items-center border border-gray-100 dark:border-white/5 group-hover:border-[#c421ff]/20 transition-colors">
                        <Display
                            className="text-gray-500 dark:text-gray-400 mb-1"
                            width={16}
                            height={16}
                        />
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                            {total_courses}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500 font-semibold">
                            Courses
                        </span>
                    </div>
                </div>

                <div className="flex gap-3">
                    {socials?.github && (
                        <Link
                            href={socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border transition-all duration-300"
                        >
                            <LogoGithub width={20} height={20} />
                        </Link>
                    )}

                    {socials?.linkedin && (
                        <Link
                            href={socials.linkedin}
                            target="_blank"
                            className="p-3 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border transition-all duration-300"
                        >
                            <LogoLinkedin width={20} height={20} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Instructor;
