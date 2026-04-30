"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    HiOutlineMail,
    HiOutlineLockClosed,
    HiEye,
    HiEyeOff,
    HiArrowRight,
} from "react-icons/hi";
import { toast } from "react-toastify";

const Login = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl")
    const redirectTo = callbackUrl || "/"

    
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const handleLogin = async (data) => {
        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            callbackURL: redirectTo,
        });

        if (error) {
            toast.error(error.message || "Something went wrong!", {
                icon: () => "🚫",
                hideProgressBar: true,
                className:
                    "!bg-white dark:!bg-zinc-900 !text-black dark:!text-white shadow-2xl rounded-xl border border-gray-100 dark:border-zinc-800 border-b-2 border-b-red-500",
            });
        } else {
            router.push(redirectTo)
            router.refresh()
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-2 py-10 transition-colors duration-500">
            <div className="backdrop-blur-xl w-full max-w-[900px] rounded-[2.5rem] shadow-2xl border border-white dark:border-zinc-800 overflow-hidden">
                <div className="p-8 sm:p-12">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-2">
                            Welcome{" "}
                            <span className="text-blue-600 dark:text-blue-500">
                                Back
                            </span>
                        </h2>
                        <p className="text-zinc-500 dark:text-zinc-400">
                            Please enter your details to login
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit(handleLogin)}
                        className="space-y-6"
                    >
                        <div className="group">
                            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 ml-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <HiOutlineMail
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-500 transition-colors z-10"
                                    size={20}
                                />
                                <input
                                    type="email"
                                    className={`w-full pl-12 pr-4 py-4 bg-zinc-200 dark:bg-zinc-800/50 rounded-2xl border-2 transition-all outline-none ${errors.email ? "border-red-500" : "border-transparent focus:border-blue-500 dark:focus:border-blue-500/50 focus:bg-white dark:focus:bg-zinc-800"} text-zinc-900 dark:text-white`}
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
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-500 transition-colors z-10"
                                    size={20}
                                />
                                <input
                                    type={
                                        isPasswordVisible ? "text" : "password"
                                    }
                                    className={`w-full pl-12 pr-12 py-4 bg-zinc-200 dark:bg-zinc-800/50 rounded-2xl border-2 transition-all outline-none ${errors.password ? "border-red-500" : "border-transparent focus:border-blue-500 dark:focus:border-blue-500/50 focus:bg-white dark:focus:bg-zinc-800"} text-zinc-900 dark:text-white`}
                                    placeholder="••••••••"
                                    {...register("password", {
                                        required: "Password is required",
                                    })}
                                />
                                <button
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
                                </button>
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
                            className="w-full h-14 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold rounded-2xl mt-4 transition-all shadow-lg shadow-blue-500/25 active:scale-95 group"
                        >
                            <span className="flex items-center gap-2">
                                Login to Account{" "}
                                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Button>
                    </form>

                    <div className="mt-10 text-center">
                        <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                            Don&apos;t have an account?{" "}
                            <Link
                                className="text-blue-600 dark:text-blue-400 font-bold hover:underline underline-offset-4"
                                href={"/registration"}
                            >
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
