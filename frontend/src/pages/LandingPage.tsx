import { ChatDisplay } from "../components/ChatDisplay";
import { Cover } from "../components/ui/cover";
import { Navbar } from "../components/ui/navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient"

export const LandingPage = () => {
    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return <>
        <Navbar location="/login" data="Login" />
        <div className="h-[100vh] w-full pt-[30%] md:pt-[10%] items-center md:items-start md:justify-center flex flex-col gap-8 md:gap-0 md:flex-row">
            {isMobile ?
                <div className="h-full w-full flex flex-col gap-12 px-[30px] items-center">
                    <h1 className="text-4xl text-nowrap md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py56 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                        Connect with local fans <br /> in <Cover>real time</Cover>
                    </h1>
                    <p className="text-[#B3B3B3] text-[18px] md:text-[18px] md:pt-[20px] text-justify font-montesserat">Welcome to the ultimate hub for <span className="uppercase font-bella">ballers!</span> This is the only place you need to be-where passion meets the game. Engage in live match discussions, connect with fellow ballers, and join local clubs effortlessly. Whether you're looking to analyze the game in real time, find teammates, or book the perfect turf, we’ve got it all covered. Elevate your football experience and be part of a thriving community built for true ballers.</p>
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black w-[200px] h-[50px] justify-center items-center bg-white text-black dark:text-white flex items-center space-x-2"
                        onClick={() => navigate("/waitlist")}
                    >
                        Join Waitlist!
                    </HoverBorderGradient>
                </div> :
                <div className="flex w-full h-full justify-between items-center px-[50px]">
                    <div className="flex flex-col w-[60%] h-full justify-start items-center gap-10">
                        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py56 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                            Connect with local fans <br /> in <Cover>real time</Cover>
                        </h1>
                        <p className="text-[#B3B3B3] text-[15px] md:text-[18px] md:pt-[20px] text-justify font-montesserat">Welcome to the ultimate hub for <span className="uppercase font-bella">ballers!</span> This is the only place you need to be-where passion meets the game. Engage in live match discussions, connect with fellow ballers, and join local clubs effortlessly. Whether you're looking to analyze the game in real time, find teammates, or book the perfect turf, we’ve got it all covered. Elevate your football experience and be part of a thriving community built for true ballers.</p>
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                            onClick={() => navigate("/waitlist")}
                        >
                            Join Waitlist!
                        </HoverBorderGradient>
                    </div>
                    <ChatDisplay />
                </div>
            }
        </div>
    </>
}
