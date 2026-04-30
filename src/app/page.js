import Hero from "@/Components/HomePage/Hero";
import HowToLearn from "@/Components/HomePage/HowToLearn";
import Learning from "@/Components/HomePage/Learning";
import TopCourses from "@/Components/HomePage/TopCourses";

export default function Home() {
    return (
        <div>
            <Hero />
            <TopCourses/>
            <Learning/>
            <HowToLearn/>
        </div>
    );
}
