'use client';

import React, { useCallback, useEffect, useState } from "react";
import {AiOutlineClose} from "react-icons/ai"


interface ModelProps{
    isOpen?: boolean;
    onClose: () => void;
    onSubmite: () => void;
    titel?: string;
    bodys?: React.ReactElement;
    footer?: React.ReactElement;
    actionLeble: string;
    disabel?: boolean;
    seconderyAction?: () => void;
    seconderyLeble?: string;
}

const Model: React.FC<ModelProps> = ({
    isOpen,
    onClose,
    onSubmite,
    titel,
    bodys,
    footer,
    actionLeble,
    disabel,
    seconderyAction,
    seconderyLeble
}) => {

    const [showModel, setShowModel] = useState(isOpen);

    useEffect(() => {
        setShowModel(isOpen);
    }, [isOpen]);

    const handelClose = useCallback(() => {
        if(disabel){
            return;
        }

        setShowModel(false)
        setTimeout(() => {
            onClose();
        }, 300);
    }, [disabel, onClose])

    const handelSubmite = useCallback(() => {
        if(disabel){
            return;
        }

        onSubmite();
    }, [disabel, onSubmite]);

    const handelsecenDeryAction = useCallback(() => {
        if(disabel || !seconderyAction){
            return;
        }

        seconderyAction();
    }, [disabel, seconderyAction]);

    if(!isOpen){
        return null;
    }
    return(
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
            <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
                {/* content */}
                <div className={`translate duration-300 h-full ${showModel ? 'translate-y-0' : "translate-y-full"} ${showModel ? "opacity-100" : "opacity-0"}`}>
                    <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/* Header */}
                        <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                            <button onClick={handelClose} className="p-1 border-0 hover:opacity-70 transition absolute left-9">
                                <AiOutlineClose size={20} color="black" />
                            </button>
                            <div className="text-lg font-semibold">
                                {titel}
                            </div>
                        </div>
                        {/* Boddy */}
                        <div className="relative p-6 flex-auto">
                            {bodys}
                        </div>
                        {/* Footer */}
                        <div className="flex flex-col gap-2 p-6">
                            <div className="flex flex-row items-center gap-4 w-full">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Model;