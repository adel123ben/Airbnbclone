import React, {useCallback, useEffect, useState} from "react"

import axios from "axios";

import {AiOutlineClose} from "react-icons/ai"
import { storage} from "../firbase";
import db from "../firbase";



import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import UseRegisterModel from "@/pages/api/hooks/UseRegisterModel";


interface useRegisterModelProps{
    visibel?: boolean;
    onClose: any;
}
const RgisterModel:React.FC<useRegisterModelProps>  = ({
    visibel,
    onClose
}) => {
    const [imageURL, setImageURL] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const registerModel = UseRegisterModel();
    const [isvisible, setIsVisible] = useState(!!visibel);


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageURL(event.target.value);
      };
    
      const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value);
      };
    
      const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value);
      };
    
      const handleSubmit = async () => {
        const houseData = {
          imageURL: imageURL,
          location: location,
          price: price
        };
      
        try {
          await db.collection("houses").add(houseData);
          onClose(); // Fermez le modèle après avoir ajouté les données
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      };
      
    

    useEffect(() => {
        setIsVisible(!!visibel)
    }, [visibel]);

    const handelClose = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 300)
    }, [onClose])

    if(!visibel){
        return null;
    }
    return(
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
            <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
            <div className={`translate duration-300 h-full ${isvisible ? 'translate-y-0' : "translate-y-full"} ${isvisible ? "opacity-100" : "opacity-0"}`}>
                    <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/* Header */}
                        <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                            <button onClick={handelClose} className="p-1 border-0 hover:opacity-70 sm:top-3 sm:left-5 xl:flex lg:flex md:flex sm:flex hidden md:top-3 transition absolute md:left-5">
                                <AiOutlineClose size={20} color="black" />
                            </button>
                            <div className="text-lg font-semibold">
                               <h1>Host your house in Airbnb</h1>
                               
                                {/* Boddy */}
                        <div className="relative p-6 flex-auto ">
                           <input type="text" value={imageURL} onChange={handleImageChange} className="mt-3 border border-gray-600 rounded-xl outline-none p-3"  placeholder="Enter your image URL" />
                        </div>
                        <div className="relative p-6 flex-auto ">
                           <input  type="text"  value={price} onChange={handlePriceChange} className=" border border-gray-600 rounded-xl outline-none p-3"  placeholder="Enter your Price" />
                        </div>

                        <div className="relative p-6 flex-auto ">
                           <input type="text" value={location} onChange={handleLocationChange} className=" border border-gray-600 rounded-xl outline-none p-3"  placeholder="Enter your Location" />
                        </div>
                        {/* Footer */}
                        <div className="flex flex-col gap-2 p-6">
                            <div className="flex flex-row items-center gap-4 w-full">
                                <button onClick={handleSubmit} className="bg-rose-500  text-white px-24 py-5 rounded-xl">Submite</button>
                            </div>
                            <div className="flex flex-row items-center gap-4 w-full">
                                <button onClick={handelClose} className="bg-rose-500 md:hidden sm:hidden lg:hidden xl:hidden  text-white px-24 py-5 rounded-xl">Cancele</button>
                            </div>
                        </div>
                            </div>
                            
                        </div>

                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RgisterModel;