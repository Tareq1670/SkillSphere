import Hero from "@/Components/HomePage/Hero";
import HowToLearn from "@/Components/HomePage/HowToLearn";
import Learning from "@/Components/HomePage/Learning";
import NewCourses from "@/Components/HomePage/NewCourses";
import TopCourses from "@/Components/HomePage/TopCourses";
import TopInstructor from "@/Components/HomePage/TopInstructor";

export default function Home() {
    return (
        <div>
            <Hero />
            <TopCourses/>
            <Learning/>
            <HowToLearn/>
            <TopInstructor/>
            <NewCourses/>
        </div>
    );
}
