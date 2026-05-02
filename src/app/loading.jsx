import { Spinner } from "@heroui/react";

const loading = () => {
    return (
        <div className="flex items-center gap-4 h-[400px] justify-center transition-all duration-500">
            <Spinner className="text-purple-600"/>
        </div>
    );
};

export default loading;
