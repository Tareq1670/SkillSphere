
import TopCourseCard from "@/Components/Card/TopCourseCard";
import { getCourses } from "@/Data/api";
import { Button } from "@heroui/react";

const CoursePage = async() => {
    const courses = await getCourses();
    return (
        <div className="my-5 px-1 md:px-0">
            <div className=" flex flex-col sm:flex-row justify-between space-y-2 mb-5 md:mb-6 lg:mb-8">
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight dark:text-white">
                        All Courses
                    </h2>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <input
                        className="input rounded-lg py-3 md:py-4 px-4 md:px-5 w-7/10"
                        placeholder="Search your item"
                        type="text"
                        name="text"
                    />
                    <Button
                        className={
                            "w-3/10  py-3 md:py-4 px-4 md:px-5 h-auto rounded-lg bg-purple-600"
                        }
                    >
                        Search
                    </Button>
                </div>
            </div>

            <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                {
                    courses.map(course => <TopCourseCard key={course.id} course={course}/>)
                }
            </div>

        </div>
    );
};

export default CoursePage;
