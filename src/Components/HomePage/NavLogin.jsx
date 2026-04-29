import { ArrowRightToSquare } from "@gravity-ui/icons";
import { Button } from "@heroui/react";

const NavLogin = () => {
    return (
        <div>
            <Button className={"bg-gradient-to-r from-[#c240e2] to-[#7514ea]"}><ArrowRightToSquare/> Login</Button>
        </div>
    );
};

export default NavLogin;