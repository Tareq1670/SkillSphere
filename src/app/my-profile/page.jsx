import EditProfile from "@/Components/Profile/EditProfile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

export const metadata = {
    title: "My Profile | SkillSphere",
    description: "Manage your learning journey on SkillSphere. View your enrolled courses, track your progress, and showcase your achievements in your personal profile.",
};

const MyProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    return (
        <div className="min-h-[82vh] flex items-center justify-center p-4">
            <div className="relative w-full max-w-md overflow-hidden rounded-lg border border-zinc-500/10 dark:border-zinc-800/50 bg-zinc-400/10 dark:bg-zinc-900/40 backdrop-blur-xl p-8 transition-all duration-500 shadow group">
                <EditProfile/>

                <div className="flex flex-col items-center space-y-6">
                    <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#c421ff] to-blue-500 shadow-lg">
                        <div className="relative w-30 h-30 mx-auto rounded-full overflow-hidden  border-[#c421ff]/20 p-1 group-hover:scale-105 transition-transform duration-500">
                            <Image
                                src={user.image}
                                alt={user.name}
                                fill
                                sizes="96px"
                                className="rounded-full object-cover p-1 bg-gray-200 dark:bg-gray-800"
                            />
                        </div>
                    </div>

                    <div className="text-center space-y-2 w-full">
                        <div className="space-y-1">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 font-bold">
                                Full Name
                            </p>
                            <h2 className="text-2xl font-black text-zinc-800 dark:text-zinc-100 tracking-tight">
                                {user.name}
                            </h2>
                        </div>

                        <div className="space-y-1">
                            <div className="h-[1px] w-12 bg-[#c421ff]/30 mx-auto " />
                            <div className="h-[1px] w-8 bg-[#c421ff]/30 mx-auto" />
                            <div className="h-[1px] w-4 bg-[#c421ff]/30 mx-auto" />
                        </div>

                        <div className="space-y-1">
                            <p className="text-[10px] uppercase tracking-10 text-zinc-500 dark:text-zinc-400 font-bold">
                                Email Address
                            </p>
                            <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                                {user.email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;
