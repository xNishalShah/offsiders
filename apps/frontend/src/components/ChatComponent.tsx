import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge"

interface PropType {
    icon: string,
    user: string,
    message: string,
    dir?: string
}
export const ChatComponent = (props: PropType) => {
    return <>
        {
            props.dir === 'left' ? <div className="flex relative w-fit gap-2 h-[40px]">
                <Avatar>
                    <AvatarImage src={props.icon} />
                    <AvatarFallback>{props.user}</AvatarFallback>
                </Avatar>
                <div className="h-full w-full relative">
                    <Badge id="bg-2" className="h-full w-full">{props.message}</Badge>
                </div>
            </div> : <div className="flex relative w-fit gap-2 h-[40px]">
                <div className="h-full w-full relative">
                    <Badge id="bg-2" className="h-full w-full">{props.message}</Badge>
                </div>
                <Avatar>
                    <AvatarImage src={props.icon} />
                    <AvatarFallback>{props.user}</AvatarFallback>
                </Avatar>
            </div>
        }
    </>
}