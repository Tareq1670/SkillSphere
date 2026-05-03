"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Separator } from "@heroui/react";
import Image from "next/image";
import LoginImage from "@/assets/images/login.png"
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import {
    HiOutlineMail,
    HiOutlineLockClosed,
    HiEye,
    HiEyeOff,
    HiArrowRight,
} from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";
import { toast } from "react-toastify";

const LoginPage = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const redirectTo = callbackUrl || "/";

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const handleLogin = async (data) => {
        setLoading(true);
        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            callbackURL: redirectTo,
            fetchOptions: {
                onSuccess() {
                    setLoading(false);
                    toast.success("Login successful!", {
                        icon: () => "✅",
                        hideProgressBar: true,
                        className:
                            "!bg-white dark:!bg-zinc-900 !text-black dark:!text-white shadow-2xl rounded-xl border border-gray-100 dark:border-zinc-800 border-b-2 border-b-green-500",
                    });
                    router.push(redirectTo);
                    router.refresh();
                },
                onError() {
                    setLoading(false);
                    toast.error(error.message || "Something went wrong!", {
                        icon: () => "🚫",
                        hideProgressBar: true,
                        className:
                            "!bg-white dark:!bg-zinc-900 !text-black dark:!text-white shadow-2xl rounded-xl border border-gray-100 dark:border-zinc-800 border-b-2 border-b-red-500",
                    });
                },
            },
        });
    };

    const googleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL: redirectTo,
        });
        if (data.error) {
            toast.error(data.error.message || "Something went wrong!", {
                icon: () => "🚫",
                hideProgressBar: true,
                className:
                    "!bg-white dark:!bg-zinc-900 !text-black dark:!text-white shadow-2xl rounded-xl border border-gray-100 dark:border-zinc-800 border-b-2 border-b-red-500",
            });
        }
    };

    const gitLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
            callbackURL: redirectTo,
        });
        if (data.error) {
            toast.error(data.error.message || "Something went wrong!", {
                icon: () => "🚫",
                hideProgressBar: true,
                className:
                    "!bg-white dark:!bg-zinc-900 !text-black dark:!text-white shadow-2xl rounded-xl border border-gray-100 dark:border-zinc-800 border-b-2 border-b-red-500",
            });
        } else {
            router.push(redirectTo);
            router.refresh();
        }
    };

    if (isLoading) {
        return (
            <div className="h-[80vh] flex items-center justify-center bg-transparent">
                <div className="backdrop-blur-md h-[500px] flex flex-col items-center justify-center w-full max-w-[500px] rounded-lg border border-zinc-200/50 dark:border-zinc-800/50 bg-white/10 dark:bg-zinc-900/20 shadow-xl overflow-hidden transition-all duration-500">
                    <div className="relative mb-6 animate-pulse">
                        <Image
                            src={LoginImage}
                            alt="Login Image"
                            className="w-64 h-64 object-contain"
                        />
                    </div>
                    <h2 className="text-2xl font-semibold tracking-widest bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                        Login...
                    </h2>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-100vh flex items-center justify-center px-1 md:px-0 py-10 transition-colors duration-500">
            <div className="backdrop-blur-xl w-full max-w-[900px] rounded-lg shadow-lg border border-white dark:border-zinc-800 overflow-hidden">
                <div className=" p-4 sm:p-8 md:p-12">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-2">
                            Welcome{" "}
                            <span className="text-purple-600 dark:text-purple-500 transition-all duration-500">
                                Back
                            </span>
                        </h2>
                        <p className="text-zinc-500 dark:text-zinc-400">
                            Please enter your details to login
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit(handleLogin)}
                        className=" space-y-2 md:space-y-6"
                    >
                        <div className="group">
                            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 ml-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <HiOutlineMail
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-purple-500 transition-colors z-10"
                                    size={20}
                                />
                                <input
                                    type="email"
                                    className={`w-full pl-12 pr-4 py-4 bg-zinc-200 dark:bg-zinc-800/50 rounded-lg border-2 transition-all outline-none ${errors.email ? "border-red-500" : "border-transparent focus:border-purple-500 dark:focus:border-purple-500/50 focus:bg-white dark:focus:bg-zinc-800"} text-zinc-900 dark:text-white`}
                                    placeholder="example@mail.com"
                                    {...register("email", {
                                        required: "Email is required to login",
                                    })}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-xs text-red-500 mt-1 ml-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div className="group">
                            <div className=" mb-2 ml-1">
                                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                    Password
                                </label>
                            </div>
                            <div className="relative">
                                <HiOutlineLockClosed
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-purple-500 transition-colors z-10"
                                    size={20}
                                />
                                <input
                                    type={
                                        isPasswordVisible ? "text" : "password"
                                    }
                                    className={`w-full pl-12 pr-12 py-4 bg-zinc-200 dark:bg-zinc-800/50 rounded-lg border-2 transition-all outline-none ${errors.password ? "border-red-500" : "border-transparent focus:border-purple-500 dark:focus:border-purple-500/50 focus:bg-white dark:focus:bg-zinc-800"} text-zinc-900 dark:text-white`}
                                    placeholder="••••••••"
                                    {...register("password", {
                                        required: "Password is required",
                                    })}
                                />
                                <Button
                                    variant="ghost"
                                    type="button"
                                    onClick={() =>
                                        setIsPasswordVisible(!isPasswordVisible)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors z-10"
                                >
                                    {isPasswordVisible ? (
                                        <HiEyeOff size={22} />
                                    ) : (
                                        <HiEye size={22} />
                                    )}
                                </Button>
                            </div>
                            {errors.password && (
                                <p className="text-xs text-red-500 mt-1 ml-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <Button
                            isLoading={isSubmitting}
                            type="submit"
                            className="w-full h-14 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-bold rounded-lg mt-4 transition-all shadow-lg shadow-purple-500/25 active:scale-99 group "
                        >
                            <span className="flex items-center gap-2">
                                Login
                            </span>
                        </Button>
                    </form>

                    <div className="mt-5 md:mt-10 text-center">
                        <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                            Don't have an account?{" "}
                            <Link
                                className="text-purple-600 dark:text-purple-400 font-bold hover:underline underline-offset-4"
                                href={"/registration"}
                            >
                                Register
                            </Link>
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center w-full justify-around text-zinc-500 dark:text-zinc-400 font-medium my-5">
                            <Separator className=" w-2/8 md:w-3/8" />
                            <div>or login with</div>
                            <Separator className=" w-2/8 md:w-3/8" />
                        </div>
                        <div className="flex w-full gap-2">
                            <Button
                                onClick={googleLogin}
                                variant="outline"
                                className={
                                    "w-full rounded-lg py-2 md:py-4 h-auto text-[14px] md:text-lg"
                                }
                            >
                                <FcGoogle /> Google
                            </Button>
                            <Button
                                onClick={gitLogin}
                                variant="outline"
                                className={
                                    " w-full rounded-lg py-2 md:py-4 h-auto text-[14px] md:text-lg"
                                }
                            >
                                <IoLogoGithub /> Github
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
