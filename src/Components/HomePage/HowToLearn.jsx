import React from "react";

const HowToLearn = () => {
    return (
        <div className="my-8 md:my-12 lg:my-15 px-1 md:px-0 mt-8 md:mt-12">
            <div className="mb-6 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight dark:text-white">
                     How to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c421ff] to-[#4d7fff]">Learn</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 backdrop-blur-2xl p-4 border border-zinc-500/20 rounded-lg dark:bg-white/5 bg-zinc-200/20 transition-all duration-500">
                <div className="col-span-3 space-y-4">
                    <div className="space-y-1 border-b border-b-zinc-800/20 dark:border-b-zinc-500 pb-2 transition-all duration-500">
                        <h2 className="text-xl dark:text-zinc-200 text-zinc-700 font-semibold transition-all duration-300">
                            Active Recall Method
                        </h2>
                        <p className="text-[14px] md:text-[16px] text-zinc-500 transition-all duration-500  leading-5">
                            Don't just re-read. Test your knowledge by recalling information from memory. This strengthens long-term retention and identifies your weak spots instantly.
                        </p>
                    </div>
                    <div className="space-y-1 border-b border-b-zinc-800/20 dark:border-b-zinc-500 pb-2 transition-all duration-500">
                        <h2 className="text-xl dark:text-zinc-200 text-zinc-700 font-semibold transition-all duration-300">
                            The Feynman Technique
                        </h2>
                        <p className="text-[14px] md:text-[16px] text-zinc-500 transition-all duration-500  leading-5">
                            Learn by teaching. If you can explain a complex concept in simple terms to a beginner, you have truly mastered the subject.
                        </p>
                    </div>
                    <div className="space-y-1 border-b border-b-zinc-800/20 dark:border-b-zinc-500 pb-2 transition-all duration-500">
                        <h2 className="text-xl dark:text-zinc-200 text-zinc-700 font-semibold transition-all duration-300">
                            Spaced Repetition System
                        </h2>
                        <p className="text-[14px] md:text-[16px] text-zinc-500 transition-all duration-500  leading-5">
                            Review information at increasing intervals. This technique combats the forgetting curve and ensures you remember what you learn for months, not days.
                        </p>
                    </div>
                </div>
                <div className="col-span-2 md:border-l border-l-zinc-800/20 dark:border-l-zinc-500 md:pl-4 space-y-2">
                    <h2 className="text-2xl dark:text-zinc-200 text-zinc-700 font-semibold transition-all duration-300 lg:mb-4">
                        Master Your Learning
                    </h2>
                    <p className="text-[14px] md:text-[16px] text-zinc-500 transition-all duration-500 leading-5 lg:leading-7">
                        At SkillSphere, we believe that how you learn is just as important as what you learn. Our platform is designed to integrate scientific study methods into your daily routine. By combining active participation with structured review, we help you bridge the gap between understanding a concept and mastering it. Whether you are tackling complex code or social work theories, these techniques ensure that your learning journey is efficient, deep, and lasting.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowToLearn;
