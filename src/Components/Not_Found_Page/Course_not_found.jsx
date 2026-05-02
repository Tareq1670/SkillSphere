import Image from "next/image";
import NotFoundImage from "@/assets/images/Course_not_found.png";
import Link from "next/link";

const CourseNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center p-10 text-center">
            <div className="relative h-60 md:h-80 w-60 md:w-80 mb-6">
                <Image
                    src={NotFoundImage}
                    alt="No Course Found"
                    fill
                    className="object-contain"
                />
            </div>

            <h2 className="text-2xl font-semibold text-zinc-400 mb-4">
                No courses found at the moment.
            </h2>

            <Link
                href="/"
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-500"
            >
                Go Back
            </Link>
        </div>
    );
};

export default CourseNotFound;
