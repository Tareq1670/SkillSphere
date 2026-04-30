import { getBanner } from "@/Data/api";
import HeroUI from "./HeroUI";

const Hero = async () => {
    const banner = await getBanner();
    return (
        <div>
            <HeroUI banner={banner}/>
        </div>
    );
};

export default Hero;