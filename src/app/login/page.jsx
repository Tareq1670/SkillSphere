import LoginPage from "@/Components/Auth/LoginPage";
import { Suspense } from "react";

const Login = () => {
    return (
        <Suspense fallback={<span>Loading..</span>}>
            <LoginPage/>
        </Suspense>
    );
};

export default Login;