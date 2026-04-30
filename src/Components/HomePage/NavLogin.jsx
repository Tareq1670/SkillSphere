import { authClient, useSession } from "@/lib/auth-client";
import { ArrowLeftToLine, ArrowRightToSquare } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const NavLogin = () => {
    const session = authClient.useSession();
    const router = useRouter()
    const pathName = usePathname()

    const handleLogin = () => {
        router.push(`/login?callbackUrl=${pathName}`)
    }

    return (
        <div>
            {session.isPending ? (
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300  animate-pulse"></div>
                    <div className="w-25 h-8 rounded-2xl bg-gray-300 animate-pulse"></div>
                </div>
            ) : session.data?.user ? (
                <div className="flex items-center space-x-2">
                    <Image
                        src={session.data?.user?.image}
                        alt="User Image"
                        width={30}
                        height={30}
                        className="rounded-full"
                    />
                    <Button
                        onClick={() => authClient.signOut()}
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
