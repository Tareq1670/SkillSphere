import { Star, Clock, ArrowRight } from "@gravity-ui/icons";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TrendingCourseCard = ({ course }) => {
    const { title, instructor, duration, rating, image, category, tag } =
        course;

    return (
        <div className="group bg-white/50 dark:bg-zinc-500/10 border border-zinc-700/10 dark:border-zinc-500/20 rounded-lg p-5 transition-all duration-500 hover:shadow-md">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                    priority={false}
                />

                <Chip className="absolute top-3 left-3 bg-red-600  backdrop-blur-md border border-white/30 dark:border-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-[1px] shadow-sm">
                    {tag}
                </Chip>
            </div>

            <div className="mt-4 px-1">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-amber-500">
                        <Star width={14} height={14} fill="currentColor" />
                        <span className="text-xs font-bold">{rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                        <Clock width={13} height={13} />
                        {duration}
                    </div>
                </div>

                <p className="text-[14px] text-zinc-500 dark:text-zinc-400">
                    Instructor :{" "}
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] underline text-cyan-600 dark:text-cyan-400">
                        {instructor}
                    </span>
                </p>
                <h3 className="text-2xl font-bold leading-tight text-zinc-800 dark:text-zinc-100 transition-colors duration-500 group-hover:text-[#c421ff] dark:group-hover:text-[#c421ff] mt-2">
                    {title}
                </h3>

                <div className="flex items-center gap-2 mb-4 mt-1">
                    <span className="text-[12px] font-medium text-zinc-400 uppercase tracking-wider">
                        Category:
                    </span>
                    <Chip className="px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold">
                        {category}
                    </Chip>
                </div>

                <div className="pt-3 border-t border-zinc-400/20 dark:border-zinc-400/20">
                    <Button className=" mt-1 w-full h-11 rounded-lg font-semibold bg-zinc-900 text-white dark:bg-white dark:text-black hover:bg-[#b63de3] dark:hover:bg-[#b63de3] hover:text-white dark:hover:text-white transition-all duration-300 shadow-lg shadow-transparent hover:shadow-[#b73de314] uppercase">
                        <Link
                            href={""}
                            className="flex items-center justify-center gap-2 h-full w-full"
                        >
                            Enrol Now
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TrendingCourseCard;
