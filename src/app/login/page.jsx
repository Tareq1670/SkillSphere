import LoginPage from "@/Components/Auth/LoginPage";
import { Spinner } from "@heroui/react";
import { Suspense } from "react";

export const metadata = {
    title: "Login Page | SkillSphere",
    description:
        "Access your SkillSphere account to continue your learning journey. Securely log in to manage your courses, track progress, and connect with expert instructors.",
};

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
