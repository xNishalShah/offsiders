import { TextGenerateEffect } from "../components/ui/text-generate-effect"
import { Input } from "../components/ui/input"
import { Navbar } from "../components/ui/navbar"
import { HoverBorderGradient } from "../components/ui/hover-border-gradient"
import { useNavigate } from "react-router-dom"
import { FlipWords } from "../components/ui/flip-words"
const words = ["intense", "loud", "real", "heated", "personal"]
const text = "Slide into the list before the whistle blows!"
export const JoinWaitlist = () => {
    const navigate = useNavigate()
    return <>
        <Navbar location="/" data="Home" />
        <div className="h-[100vh] w-full md:pt-[5%] bg-black flex flex-col justify-center items-center gap-10">
            <div className="w-full flex justify-center items-center px-4">
                <div className="text-xl md:text-4xl text-center mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                    Where football gets
                    <FlipWords words={words} />
                    — in real time, with local ballers.
                </div>
            </div>
            <div className="flex flex-col w-[90%] items-center justify-center gap-5 md:w-[50%] rounded-xl p-6 bg-gradient-to-br from-black via-[#1a1a1a] to-black bg-opacity-60 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/10">
                <TextGenerateEffect words={text} />
                <Input className="text-white" placeholder="Your email here..." type="email" />
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    onClick={() => navigate("/")}
                >
                    Lock my spot!
                </HoverBorderGradient>
            </div>
        </div>
    </>
}