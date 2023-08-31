import {AiOutlineHeart} from "react-icons/ai" 
import {FiMoreVertical} from "react-icons/fi"


interface HouseFillProps{
    image: string,
    location: string,
    type: string,
    prix: number
}

const HoiseFill: React.FC<HouseFillProps> = ({
    image,
    location,
    type,
    prix
}) => {
    return(
        <div className="flex flex-col items-center md:items-start shadow-2xl xl:shadow-sm lg:shadow-sm md:shadow-sm sm:shadow-sm rounded-lg mt-5">
           <img className="flex hover:scale-105 transition md:h-96 md:w-96 lg:h-72 lg:w-72 sm:h-52 sm:w-52  transform duration-300 ease-out object-cover cursor-pointer h-96 w-96 rounded-lg" src={image} alt="" />
           <div className="flex flex-row items-center mt-2">
            <p className="flex  items-center  font-bold">{location}</p>
           
           </div>

           <div className="flex flex-col ">
            <p className="text-gray-500">{type}</p>
           </div>
         

         <div className="flex flex-row">
            <p className="flex font-semibold">${prix}/<span className="text-gray-500">night</span></p>
         </div>
        </div>
    )
}

export default HoiseFill;