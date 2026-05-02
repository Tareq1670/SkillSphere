import NoResult from "@/assets/images/no-results.png";
import Image from "next/image";
import Link from "next/link";

const SearchCourseNotFound = () => {
    return (
        <div className="h-[70vh] w-full flex flex-col items-center justify-center px-6 text-center">
            <div className="relative h-52 w-52 md:h-64 md:w-64 mb-6 opacity-80 transition-opacity hover:opacity-100">
                <Image
                    src={NoResult}
                    alt="No Course Found"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white mb-2">
                No courses found
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 max-w-sm mb-8">
                We couldn't find what you're looking for. Please try another search or browse categories.
            </p>
        </div>
    );
};

export default SearchCourseNotFound;