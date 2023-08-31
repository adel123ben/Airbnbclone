'use client';


import React, {useCallback} from "react";
import UseRegisterModel from "../api/hooks/UseRegisterModel";

interface MobileMenue{
    MobileMenuVisibl?: boolean
}



const MobileMenu: React.FC<MobileMenue> = ({
    MobileMenuVisibl
}) => {
    const {onOpen} = UseRegisterModel();

const handelOpenModel = useCallback(() => {
    onOpen();
}, [onOpen])
    if(!MobileMenuVisibl){
        return null;
    }
    return(
        <div className="bg-white w-56 absolute top-14 right-0 py-5 flex-col border-2 rounded-lg border-white shadow-xl flex">
            <div className="flex flex-col gap-4">
            <div onClick={handelOpenModel} className="px-3 text-center text-black font-semibold hover:underline">
          Becom a hoste
        </div>
            </div>
        </div>
    )
}

export default MobileMenu;