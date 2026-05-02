"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { HiOutlineUser, HiOutlinePhotograph } from "react-icons/hi";
import { toast } from "react-toastify";
import Link from "next/link";

const EditProfilePage = () => {
    const router = useRouter();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const updateProfile = async (data) => {
        const { data: res, error } = await authClient.updateUser({
            name: data.name,
            image: data.photoURL,
            callbackUrl: "/my-profile",
        });

        if (error) {
            toast.error(error.message || "Update failed!", {
                icon: () => "🚫",
                hideProgressBar: true,
                className:
                    "!bg-white dark:!bg-zinc-900 !text-black dark:!text-white shadow-2xl rounded-xl border border-gray-100 dark:border-zinc-800 border-b-2 border-b-red-500",
            });
        } else {
            toast.success("Profile updated successfully!", {
                icon: () => "✅",
                hideProgressBar: true,
                className:
                    "!bg-white dark:!bg-zinc-900 !text-black dark:!text-white shadow-2xl rounded-xl border border-gray-100 dark:border-zinc-800 border-b-2 border-b-green-500",
            });
            reset();
            router.push("/my-profile");
            router.refresh();
        }
    };

    return (
        <div className="min-h-100vh flex items-center justify-center px-1 md:px-0 py-10 transition-colors duration-500">
            <div className="backdrop-blur-xl w-full max-w-[900px] rounded-lg shadow-lg border border-white dark:border-zinc-800 overflow-hidden">
                <div className="p-4 sm:p-8 md:p-12">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-2">
                            Edit{" "}
                            <span className="text-purple-600 dark:text-purple-500">
                                Profile
                            </span>
                        </h2>
                        <p className="text-zinc-500 dark:text-zinc-400">
                            Update your personal information to keep your
                            account fresh.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit(updateProfile)}
                        className="space-y-4 md:space-y-6"
                    >
                        <div className="group">
                            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 ml-1">
                                Full Name
                            </label>
                            <div className="relative">
                                <HiOutlineUser
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-purple-500 transition-colors z-10"
                                    size={20}
                                />
                                <input
                                    type="text"
                                    className={`w-full pl-12 pr-4 py-4 bg-zinc-200 dark:bg-zinc-800/50 rounded-lg border-2 transition-all outline-none ${errors.name ? "border-red-500" : "border-transparent focus:border-purple-500 dark:focus:border-purple-500/50 focus:bg-white dark:focus:bg-zinc-800"} text-zinc-900 dark:text-white`}
                                    placeholder="Input your update name"
                                    {...register("name", {
                                        required: "Full name is required",
                                    })}
                                />
                            </div>
                            {errors.name && (
                                <p className="text-xs text-red-500 mt-1 ml-1">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        <div className="group">
                            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 ml-1">
                                Profile Picture URL
                            </label>
                            <div className="relative">
                                <HiOutlinePhotograph
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-purple-500 transition-colors z-10"
                                    size={20}
                                />
                                <input
                                    type="url"
                                    className={`w-full pl-12 pr-4 py-4 bg-zinc-200 dark:bg-zinc-800/50 rounded-lg border-2 transition-all outline-none ${errors.photoURL ? "border-red-500" : "border-transparent focus:border-purple-500 dark:focus:border-purple-500/50 focus:bg-white dark:focus:bg-zinc-800"} text-zinc-900 dark:text-white`}
                                    placeholder="https://example.com/photo.jpg"
                                    {...register("photoURL", {
                                        required: "Image URL is required",
                                        pattern: {
                                            value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i,
                                            message:
                                                "Please enter a valid image URL",
                                        },
                                    })}
                                />
                            </div>
                            {errors.photoURL && (
                                <p className="text-xs text-red-500 mt-1 ml-1">
                                    {errors.photoURL.message}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col-reverse sm:flex-row gap-4 pt-2">
                            <Link className="w-full" href={"/my-profile"}>
                                <Button
                                    variant="flat"
                                    className="w-full h-14 bg-zinc-600 hover:bg-zinc-700 dark:bg-zinc-500 dark:hover:bg-zinc-600 text-white font-bold rounded-lg mt-4 transition-all shadow-lg shadow-purple-500/25 active:scale-98 group"
                                >
                                    Cancel
                                </Button>
                            </Link>
                            <Button
                                isLoading={isSubmitting}
                                type="submit"
                                className="w-full h-14 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-bold rounded-lg mt-4 transition-all shadow-lg shadow-purple-500/25 active:scale-98 group"
                            >
                                {isSubmitting ? "Updating..." : "Save Changes"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfilePage;
