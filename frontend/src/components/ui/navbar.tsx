import { useNavigate } from "react-router-dom"

interface NavPropType {
    location: string,
    data: string
}
export const Navbar = (props: NavPropType) => {
    const navigate = useNavigate()
    return <>
        <div className="flex justify-between items-center w-[90%] h-[10%] md:h-[12%] rounded-3xl fixed z-50 top-3 p-[20px] left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-md border border-white/20 shadow-xl">
            <button 
            className="hover:text-[#C3C2C2] relative text-[20px] md:text-[30px] text-white cursor-default italic"
            onClick={() => navigate('/')}
            >Offsiders!</button>
            <button 
            className="w-[40%] md:w-[20%] flex justify-end cursor-default items-center text-white text-[15px] md:text-[20px]"
            onClick={() => navigate(props.location)}
            >
                <h5 className="hover:text-[#C3C2C2]">{props.data}</h5>
            </button>
        </div>
    </>
}