import { TbBeach } from "react-icons/tb";
import {MdOutlineBedroomChild} from "react-icons/md"
import {GiBoatFishing, GiCampingTent, GiSkier, GiKitchenScale, GiGrandPiano} from "react-icons/gi"
import {TbHomeHeart, TbMilkshake} from "react-icons/tb"
import {GrOverview} from "react-icons/gr"
import {SiInfluxdb} from "react-icons/si"
import {BiLandscape, BiSolidCastle} from "react-icons/bi"
import {BsSnow2} from "react-icons/bs"
import {PiKeyDuotone} from "react-icons/pi"
import {LiaGolfBallSolid} from "react-icons/lia"




const SlidShow = () => {
    const iconData = [
        { icon: <TbBeach className="text-4xl" />, text: "Beach" },
        { icon: <MdOutlineBedroomChild className="text-4xl" />, text: "rooms" },
        { icon: <GiBoatFishing className="text-4xl" />, text: "Beach" },
        { icon: <GiCampingTent className="text-4xl" />, text: "comping" },
        { icon: <GiSkier className="text-4xl" />, text: "snow" },
        { icon: <GiKitchenScale className="text-4xl" />, text: "kichen" },
        { icon: <TbHomeHeart className="text-4xl" />, text: "house" },
        { icon: <TbMilkshake className="text-4xl" />, text: "eats" },
        { icon: <GiGrandPiano className="text-4xl" />, text: "pianos" },
        { icon: <SiInfluxdb className="text-4xl" />, text: "lux" },
        { icon: <BiLandscape className="text-4xl" />, text: "ilands" },
        { icon: <BiSolidCastle className="text-4xl" />, text: "castle" },
        { icon: <BsSnow2 className="text-4xl" />, text: "snow" },
        { icon: <PiKeyDuotone className="text-4xl" />, text: "key" },
        { icon: <LiaGolfBallSolid className="text-4xl" />, text: "golf" },
        // Ajoutez d'autres données d'icônes et de texte ici
    ];

    return (
        <div className="flex cursor-pointer object-contain flex-row items-center   justify-center overflow-scroll scrollbar-transparent shadow-md mb-5 text-gray-500">
            {iconData.map((data, index) => (
                <div key={index} className="flex flex-col items-center mx-4">
                    {data.icon}
                    <p className="mt-2">{data.text}</p>
                </div>
            ))}
        </div>
    );
}

export default SlidShow;
