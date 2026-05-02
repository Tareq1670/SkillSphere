import { authClient } from "@/lib/auth-client";
import { ArrowRightToSquare } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const NavLogin = () => {
    const session = authClient.useSession();
    const router = useRouter();
    const pathName = usePathname();

    const handleLogin = () => {
        router.push(
            `/login?callbackUrl=${pathName === "/login" ? "/" : pathName}`,
        );
    };

    const handleLogOut = async () => {
        try {
            await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        router.push(pathName);
                        router.refresh();
                        toast.success("Logout successfully!", {
                            icon: () => "✅",
                            hideProgressBar: true,
                            className:
                                "!bg-white dark:!bg-zinc-900 !text-black dark:!text-white shadow-2xl rounded-xl border-b-2 border-b-green-500",
                        });
                    },
                },
            });
        } catch (error) {
            toast.error(error || "Update failed!", {
                icons: () => "🚫",
                hideProgressBar: true,
                className:
                    "!bg-white dark:!bg-zinc-900 !text-black dark:!text-white shadow-2xl rounded-xl border-b-2 border-b-red-500",
            });
        }
    };

    return (
        <div>
            {session.isPending ? (
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300  animate-pulse"></div>
                    <div className="w-25 h-8 rounded-2xl bg-gray-300 animate-pulse"></div>
                </div>
            ) : session.data?.user ? (
                <div className="flex items-center space-x-2">
                    <Link href={"/my-profile"}>
                        <Image
                            src={session.data?.user?.image}
                            alt="User Image"
                            width={500}
                            height={500}
                            loading="eager"
                            className="rounded-full w-[35px] h-[35px] object-cover"
                        />
                    </Link>
                    <Button
                        onClick={handleLogOut}
                        className={
                            "bg-gradient-to-r from-[#c240e2] to-[#7514ea]  active:scale-99"
                        }
                    >
                        LogOut
                    </Button>
                </div>
            ) : (
                <Button
                    onClick={handleLogin}
                    className={"bg-gradient-to-r from-[#c240e2] to-[#7514ea]"}
                >
                    <ArrowRightToSquare /> Login
                </Button>
            )}
        </div>
    );
};

export default NavLogin;
