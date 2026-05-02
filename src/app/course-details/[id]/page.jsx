import Course_not_found from "@/Components/Not_Found_Page/Course_not_found";
import { getCoursesDetails } from "@/Data/api";
import { Button, Chip } from "@heroui/react";
import {
    Clock,
    BarChart,
    Star,
    CheckCircle,
    BookOpen,
    User,
    Award,
} from "lucide-react";
import Image from "next/image";

const CourseDetails = async ({ params }) => {
    const { id } = await params;
    const course = await getCoursesDetails(id);

    if (!course || course.error) {
        return <Course_not_found />;
    }

    return (
        <div className="min-h-screen  md:py-5 lg:py-10 px-1 md:px-0 transition-all duration-500">
            <div className=" ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 items-start">
                    <div className="lg:col-span-2 space-y-4 md:space-y-6">
                        <div className="bg-zinc-400/10 dark:bg-gray-600/10 p-6 md:p-10 rounded-lg border border-zinc-400/40 dark:border-zinc-400/20">
                            <div className="flex items-center gap-2 mb-4">
                                <Chip className="px-3 py-1 rounded-lg bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-[12px] font-bold uppercase tracking-wider">
                                    {course.category}
                                </Chip>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                                {course.title}
                            </h1>

                            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                {course.description}
                            </p>

                            <div className="mt-8 pt-8 border-t border-zinc-300 dark:border-white/5 flex flex-wrap gap-8">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    </div>
                                    <div>
                                        <p className="text-[12px] text-zinc-500 uppercase font-bold">
                                            Rating
                                        </p>
                                        <p className="text-zinc-900 dark:text-white font-semibold">
                                            {course.rating} / 5.0
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                        <Clock className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <p className="text-[12px] text-zinc-500 uppercase font-bold">
                                            Duration
                                        </p>
                                        <p className="text-zinc-900 dark:text-white font-semibold">
                                            {course.duration}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                        <BarChart className="w-5 h-5 text-purple-500" />
                                    </div>
                                    <div>
                                        <p className="text-[12px] text-zinc-500 uppercase font-bold">
                                            Level
                                        </p>
                                        <p className="text-zinc-900 dark:text-white font-semibold">
                                            {course.level}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="bg-zinc-400/10 dark:bg-gray-600/10 p-6 md:p-10 rounded-lg border border-zinc-400/40 dark:border-zinc-400/20">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
                                    <BookOpen className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                                    What You'll Master
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {course.whatYouWillLearn?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-500/10 group hover:bg-white dark:hover:bg-zinc-700 border border-transparent hover:border-purple-200 dark:hover:border-purple-500/30 transition-all duration-500"
                                    >
                                        <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                        <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1 sticky top-8 space-y-6">
                        <div className="bg-zinc-400/10 dark:bg-zinc-600/10 rounded-lg overflow-hidden border border-zinc-400/40 dark:border-white/10 ">
                            <div className="relative group">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    height={500}
                                    width={500}
                                    className="w-full aspect-video object-cover transition-transform duration-700"
                                />
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-8 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-600/20">
                                    <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                                        <User className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 font-bold uppercase tracking-tighter">
                                            Instructor
                                        </p>
                                        <p className="text-zinc-900 dark:text-white font-bold text-lg leading-none">
                                            {course.instructor}
                                        </p>
                                    </div>
                                </div>

                                <Button className=" w-full h-auto py-5 bg-purple-600 hover:bg-purple-700 text-white font-extrabold rounded-lg  transition-all active:scale-[0.99] mb-4">
                                    Enroll Course
                                </Button>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-center gap-2 text-[14px] text-zinc-500 dark:text-zinc-400">
                                        <Award className="w-4 h-4" />
                                        <span>Certificate of completion</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
