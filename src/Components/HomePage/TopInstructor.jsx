import { getInstructor } from "@/Data/api";
import Instructor from "./Instructor";

const TopInstructor = async () => {
    const instructors = await getInstructor();

    return (
        <section className=" py-8 md:py-12 lg:py-16 px-1 md:px-0 mx-auto">
            <div className="mb-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight dark:text-white">
                    Top <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c421ff] to-[#4d7fff]">Instructors</span>
                </h2>
                <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
                    Learn from industry experts and take your skills to the next level with SkillSphere.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                {instructors.map((instructor) => (
                    <Instructor key={instructor.id} instructor={instructor} />
                ))}
            </div>
        </section>
    );
};

export default TopInstructor;