import LoginPage from "@/Components/Auth/LoginPage";
import { Spinner } from "@heroui/react";
import { Suspense } from "react";

const Login = () => {
    return (
        <Suspense
            fallback={
                <div className="flex h-[400px] justify-center items-center gap-4">
                    <Spinner />
                </div>
            }
        >
            <LoginPage />
        </Suspense>
    );
};

export default Login;
