
export const Navbar = () => {
    return <>
        <div className="flex justify-between items-center w-[90%] h-[10%] md:h-[12%] rounded-3xl fixed z-50 top-3 p-[20px] left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-md border border-white/20 shadow-xl">
            <h3 className="hover:text-[#C3C2C2] relative text-[20px] md:text-[30px] text-white cursor-default italic">Offsiders!</h3>
            <div className="w-[40%] md:w-[20%] flex justify-between cursor-default items-center text-white text-[15px] md:text-[20px]">
                <h5 className="hover:text-[#C3C2C2]">Matches</h5>
                <h5 className="hover:text-[#C3C2C2]">Login</h5>
            </div>
        </div>
    </>
}