import { ChatComponent } from "./ChatComponent";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ChatDisplay = () => {
    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#chat-section",
                start: "top 75%",
                toggleActions: "play none none none",
            }
        });

        tl.from("#mes-1", { y: 20, opacity: 0, duration: 1, delay: 0.5 });
        tl.from("#mes-2", { y: 20, opacity: 0, duration: 1, delay: 0.5 });
        tl.from("#mes-3", { y: 20, opacity: 0, duration: 1, delay: 0.5 });
        tl.from("#mes-4", { y: 20, opacity: 0, duration: 1, delay: 0.3 });
        tl.from("#mes-5", { y: 20, opacity: 0, duration: 1, delay: 0.9 });
        tl.from("#mes-6", { y: 20, opacity: 0, duration: 1, delay: 0.7 });
        tl.from("#mes-7", { y: 20, opacity: 0, duration: 1, delay: 1 });
        tl.from("#mes-8", { y: 20, opacity: 0, duration: 1, delay: 0.4 });
    });

    return (
        <div id="chat-section" className="h-[520px] w-[400px] bg-black border-[#171717] border-[1px] flex text-white flex-col gap-3 rounded-2xl p-[20px]">
            <div id="mes-1" className="flex w-full h-[30px] mb-[20px]">
                <ChatComponent icon="https://i.pinimg.com/736x/14/76/7d/14767d6285f453b0d4c70b10fb7553c3.jpg" user="cn" message="Rodrygo's goal!!!" dir="left" />
            </div>
            <div id="mes-2" className="flex justify-end w-full h-[30px] mb-[20px]">
                <ChatComponent icon="https://i.pinimg.com/736x/65/2e/d5/652ed54747508c409c75f4ad1968c99c.jpg" user="cn" message="Thrashed Athletico completely." />
            </div>
            <div id="mes-3" className="flex w-full h-[30px] mb-[20px]">
                <ChatComponent icon="https://i.pinimg.com/736x/5f/34/2c/5f342c4d5d71e3f1e485b4c8e182feaf.jpg" user="cn" message="Hope they keep up with the defense." dir="left" />
            </div>
            <div id="mes-4" className="flex justify-end w-full h-[30px] mb-[20px]">
                <ChatComponent icon="https://i.pinimg.com/736x/37/03/36/370336e82f918bee24b22faf472b3c7d.jpg" user="cn" message="Damn that tackle." />
            </div>
            <div id="mes-5" className="flex w-full h-[30px] mb-[20px]">
                <ChatComponent icon="https://i.pinimg.com/736x/1f/11/d3/1f11d3f41e9ba5f3f51edcb7d6f89c93.jpg" user="cn" message="Thank god that wasn't a red." dir="left" />
            </div>
            <div id="mes-6" className="flex w-full h-[30px] mb-[20px]">
                <ChatComponent icon="https://i.pinimg.com/736x/98/71/ba/9871ba478fd6e57758eda0e39d9e6332.jpg" user="cn" message="Damn Alvarez! that was a goal!!" dir="left" />
            </div>
            <div id="mes-7" className="flex justify-end w-full h-[30px] mb-[20px]">
                <ChatComponent icon="https://i.pinimg.com/736x/9c/ce/2c/9cce2c91871fad7b6978aa9e1a5a2d18.jpg" user="cn" message="That was a hell of a goal." />
            </div>
            <div id="mes-8" className="flex w-full h-[30px] mb-[20px]">
                <ChatComponent icon="https://i.pinimg.com/736x/54/9d/22/549d22413ce30e7b0becedf33001d0e3.jpg" user="cn" message="Phew! was hell of a match." dir="left" />
            </div>
        </div>
    );
};
