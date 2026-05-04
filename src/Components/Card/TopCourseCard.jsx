import { Star, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button, Chip } from "@heroui/react";
import Link from "next/link";

const TopCourseCard = ({ course }) => {
    const { image, title, rating, instructor, id } = course;

    return (
        <div className="group relative overflow-hidden rounded-lg border border-black/10 bg-white/40 dark:border-white/10 dark:bg-zinc-900/50 backdrop-blur-md p-5 transition-all duration-500">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-102"
                />

                <Chip
                    variant="flat"
                    className="absolute top-3 right-3 h-7 min-w-0 gap-1 bg-white/90 dark:bg-black/70 backdrop-blur-md border border-white/20 shadow-sm"
                >
                    <Star size={12} className="text-[#c421ff] fill-[#c421ff]" />
                    <span className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100">
                        {rating}
                    </span>
                </Chip>
            </div>

            <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] underline text-cyan-600 dark:text-cyan-400">
                        {instructor}
                    </span>
                </div>

                <h3 className="text-2xl font-bold leading-tight text-zinc-800 dark:text-zinc-100 line-clamp-1 transition-colors duration-300 group-hover:text-[#c421ff] dark:group-hover:text-[#c421ff]">
                    {title}
                </h3>

                <Button className=" mt-3 w-full h-11 rounded-lg font-semibold bg-zinc-900 text-white dark:bg-white dark:text-black hover:bg-[#b63de3] dark:hover:bg-[#b63de3] hover:text-white dark:hover:text-white transition-all duration-300 shadow-lg shadow-transparent hover:shadow-[#b73de314]">
                    <Link
                        href={`/course-details/${id}`}
                        className="flex items-center justify-center gap-2 h-full w-full"
                    >
                        View Details
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default TopCourseCard;
