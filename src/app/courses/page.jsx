import TopCourseCard from "@/Components/Card/TopCourseCard";
import SearchCourseNotFound from "@/Components/Not_Found_Page/SearchCourseNotFound";
import SearchBar from "@/Components/Search/SearchBar";
import { getCourses } from "@/Data/api";

const CoursePage = async({searchParams}) => {
    const {search} = await searchParams;

    const allCourses = await getCourses();

    const filterCourses = allCourses.filter((course) => {
        if(!search) return true;
        return(
            course.title.toLowerCase().includes(search.toLowerCase())
        )
    })




    return (
        <div className="my-5 px-1 md:px-0">
            <div className=" flex flex-col sm:flex-row justify-between space-y-2 mb-5 md:mb-6 lg:mb-8">
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight dark:text-white">
                        All Courses
                    </h2>
                </div>
                <SearchBar/>
            </div>

           {
            !filterCourses.length ? <SearchCourseNotFound/> :  <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                {
                     filterCourses.map(course => <TopCourseCard key={course.id} course={course}/>)
                }
            </div>
           }

        </div>
    );
};

export default CoursePage;
