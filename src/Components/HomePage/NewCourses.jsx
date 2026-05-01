import { getNewCourses } from "@/Data/api";
import TrendingCourseCard from "./TrendingCourseCard";

const NewCourses = async () => {
    const courses = await getNewCourses();

    return (
        <div className="pt-8  md:pt-12 px-1 md:px-0">
            <div className="mb-6 md:mb-10 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    Trending{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c421ff] to-[#4d7fff]">
                        Courses
                    </span>
                </h2>
                <p className="mt-1 text-slate-600 dark:text-slate-400">
                    Explore our most popular and high-rated learning paths.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
                {courses.map((course) => (
                    <TrendingCourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default NewCourses;
