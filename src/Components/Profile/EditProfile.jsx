"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineUser, HiOutlinePhotograph } from "react-icons/hi";
import { toast } from "react-toastify";

const EditProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const updateProfile = async(data) => {
        const{ data:res , error} = await authClient.updateUser({
            name: data.name,
            image:data.photoURL,
            callbackUrl: "/my-profile"
        })
        if(error){
            toast.error(error.message || "Update failed!",{
                icons:()=>"🚫",
                hideProgressBar:true,
                className: "!bg-white dark:!bg-zinc-900 !text-black dark:!text-white shadow-2xl rounded-xl border-b-2 border-b-red-500",
            })
        }
        else{
            toast.success("Profile update successfully!",{
                icon: () => "✅",
                hideProgressBar: true,
                className: "!bg-white dark:!bg-zinc-900 !text-black dark:!text-white shadow-2xl rounded-xl border-b-2 border-b-green-500",
            }),
            reset();
            router.refresh()
            setIsOpen(false)
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
            <Button
            onClick={()=>setIsOpen(true)}
                variant="flat"
                className="absolute top-4 right-4 cursor-pointer bg-purple-600/10 text-purple-600 hover:bg-purple-600 hover:text-white border border-purple-600/20 text-[14px] backdrop-blur-2xl transition-all duration-500 py-1 px-4 rounded-full font-bold"
            >
                Edit Profile
            </Button>

            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden shadow-2xl">
                        <Modal.CloseTrigger onClick={() => setIsOpen(false)} className="z-50" />
                        
                        <Modal.Header className="pt-8">
                            <Modal.Heading className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                                Update <span className="text-blue-600">Profile</span>
                            </Modal.Heading>
                            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                                You can change name and image. Email is fixed.
                            </p>
                        </Modal.Header>

                        <Modal.Body className="py-4">
                            <form onSubmit={handleSubmit(updateProfile)} className="space-y-4">
                                <div className="group">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 ml-1">
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <HiOutlineUser
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-500 transition-colors z-10"
                                            size={20}
                                        />
                                        <input
                                            type="text"
                                            className={`w-full pl-12 pr-4 py-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-2xl border-2 transition-all outline-none ${
                                                errors.name ? "border-red-500" : "border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-zinc-800"
                                            } text-zinc-900 dark:text-white`}
                                            placeholder="Enter your name"
                                            {...register("name", { required: "Name is required" })}
                                        />
                                    </div>
                                    {errors.name && <p className="text-xs text-red-500 mt-1 ml-1">{errors.name.message}</p>}
                                </div>

                                <div className="group">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 ml-1">
                                        Profile Picture URL
                                    </label>
                                    <div className="relative">
                                        <HiOutlinePhotograph
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-500 transition-colors z-10"
                                            size={20}
                                        />
                                        <input
                                            type="text"
                                            className={`w-full pl-12 pr-4 py-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-2xl border-2 transition-all outline-none ${
                                                errors.photoURL ? "border-red-500" : "border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-zinc-800"
                                            } text-zinc-900 dark:text-white`}
                                            placeholder="https://image-link.com"
                                            {...register("photoURL", { required: "Image URL is required || Input your valid imageUrl else crush your account" })}
                                        />
                                    </div>
                                    {errors.photoURL && <p className="text-xs text-red-500 mt-1 ml-1">{errors.photoURL.message}</p>}
                                </div>

                                <Modal.Footer className="px-0 pb-0 flex gap-3">
                                    <Button 
                                        onClick={()=>setIsOpen(false)}
                                        variant="light" 
                                        className="flex-1 h-12 rounded-2xl font-bold text-zinc-500"
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        isLoading={isSubmitting}
                                        type="submit"
                                        className="flex-[2] h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-500/25 active:scale-98"
                                    >
                                        Update Profile
                                    </Button>
                                </Modal.Footer>
                            </form>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditProfile;