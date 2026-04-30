import React from "react";

const HowToLearn = () => {
    return (
        <div className="my-8 md:my-12 lg:my-15 px-1 md:px-0 mt-8 md:mt-12">
            <div className="mb-4">
                <h2 className="text-3xl font-bold tracking-tight light:text-white dark:text-white text-center under">
                    How to <span className="text-[#c421ff]">Learn</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 backdrop-blur-2xl p-4 border border-zinc-500/20 rounded-lg dark:bg-white/5 bg-zinc-200/20 transition-all duration-500">
                <div className="col-span-3 space-y-4">
                    <div className="space-y-1 border-b border-b-zinc-800/20 dark:border-b-zinc-500 pb-2 transition-all duration-500">
                        <h2 className="text-xl dark:text-zinc-200 text-zinc-700 font-semibold transition-all duration-300">
                            Guided Learning Path
                        </h2>
                        <p className="text-[14px] md:text-[16px] text-zinc-500 transition-all duration-500  leading-5">
                            Follow an expert-designed, step-by-step curriculum
                            that simplifies complex topics, taking you from
                            beginner to job-ready professional.
                        </p>
                    </div>
                    <div className="space-y-1 border-b border-b-zinc-800/20 dark:border-b-zinc-500 pb-2 transition-all duration-500">
                        <h2 className="text-xl dark:text-zinc-200 text-zinc-700 font-semibold transition-all duration-300">
                            Interactive Practical Projects
                        </h2>
                        <p className="text-[14px] md:text-[16px] text-zinc-500 transition-all duration-500  leading-5">
                            Master skills by building real-world applications.
                            Solve industry challenges to create a powerful,
                            standout portfolio.
                        </p>
                    </div>
                    <div className="space-y-1 border-b border-b-zinc-800/20 dark:border-b-zinc-500 pb-2 transition-all duration-500">
                        <h2 className="text-xl dark:text-zinc-200 text-zinc-700 font-semibold transition-all duration-300">
                            Expert Mentorship & Support
                        </h2>
                        <p className="text-[14px] md:text-[16px] text-zinc-500 transition-all duration-500  leading-5">
                            Stay on track with expert guidance and community
                            support, ensuring a smooth, efficient, and
                            constantly evolving learning experience.
                        </p>
                    </div>
                </div>
                <div className="col-span-2 md:border-l border-l-zinc-800/20 dark:border-l-zinc-500 md:pl-4 space-y-2">
                    <h2 className="text-2xl dark:text-zinc-200 text-zinc-700 font-semibold transition-all duration-300 lg:mb-4">
                        Empower Your Growth
                    </h2>
                    <p className="text-[14px] md:text-[16px] text-zinc-500 transition-all duration-500 leading-5 lg:leading-7">
                        At SkillSphere, we bridge the gap between theory and
                        practice. Our platform offers a flexible, self-paced
                        environment designed for mastering in-demand
                        technologies through an ecosystem built for growth.
                        Beyond tutorials, we integrate hands-on labs and
                        real-world case studies into every course, ensuring you
                        solve actual problems rather than just memorizing
                        syntax. Whether switching careers or leveling up,
                        SkillSphere provides the tools and expert insights to
                        help you reach your goals with confidence.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowToLearn;
