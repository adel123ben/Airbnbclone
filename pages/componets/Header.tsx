import { useCallback, useState } from "react";
import { AiOutlineSearch, AiOutlineGlobal, AiOutlineMenu } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import UseRegisterModel from "../api/hooks/UseRegisterModel";
import MobileMenu from "./MobileMenue";


const Header = () => {
    const {onOpen} = UseRegisterModel();

    const handelOpenMobile = useCallback(() => {
        onOpen();
    }, [onOpen])

    const [showMobileMenu, setShowMobileMenue] = useState(false);

    const tooggelMenu = useCallback(() => {
        setShowMobileMenue((curent) => !curent)
    }, [])

    const handelOpenModel = useCallback(() => {
        onOpen();
    }, [onOpen])
    return(
        <header className="sticky top-0 z-50 grid grid-cols-3 w-full bg-white shadow-md py-3 px-5 md:px-10">
            {/* left */}

            <div className="relative flex items-center my-auto">
                <img className=" h-10 object-contain cursor-pointer" src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo.png" alt="" />
            </div>

            {/* middel */}

            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input className="pl-5 placeholder:text-gray-400 text-sm text-gray-600 flex-grow bg-transparent outline-none" type="text" placeholder="start your search" />
                
                
                
                
                <AiOutlineSearch size={30} color="white" className="rounded-full md:mx-2 hidden md:inline-flex cursor-pointer p-2  bg-rose-500 " />
                
                
                
               
                
                
            </div>

            {/* right */}

            <div className="flex items-center justify-end space-x-4 text-gray-500">
                <p onClick={handelOpenModel} className="hidden md:inline-flex cursor-pointer">Become a host</p>
                <AiOutlineGlobal />

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
                    <AiOutlineMenu onClick={tooggelMenu} />
                    <MobileMenu   MobileMenuVisibl={showMobileMenu}/>
                    <BiSolidUserCircle size={20} />
                </div>
            </div>
        </header>
    )
}

export default Header