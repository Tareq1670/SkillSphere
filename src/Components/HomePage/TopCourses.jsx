import { getCourses } from "@/Data/api";
import { Spinner } from "@heroui/react";
import TopCourseCard from "../Card/TopCourseCard";

const TopCourses = async () => {
    const courses = await getCourses();
    const sortCourse = courses.sort((a, b) => b.rating - a.rating);
    const topCourse = sortCourse.slice(0, 3);

    if (!courses.length) {
        return (
            <div className="flex items-center justify-center h-[400px] w-full">
                <p className="text-2xl text-zinc-500 animate-pulse">No courses found.</p>
            </div>
        );
    }

    return (
        <div className="py-10 px-1 mx:px-0">
            <div className="mb-6 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight dark:text-white">
                    Top <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c421ff] to-[#4d7fff]">Rated Courses</span>
                </h2>
                <p className="mt-1 text-gray-500 max-w-2xl mx-auto">
                    Explore our most popular learning paths.
                </p>
            </div>

            <div className="w-full md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {topCourse.map((course) => (
                    <TopCourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default TopCourses;
