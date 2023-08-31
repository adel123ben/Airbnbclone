const Banner = () => {
    return (
        <div className="relative">
            <img className="object-contain" src="https://blog.stockal.com/wp-content/uploads/2021/09/Banner-2new.png" alt="" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className="text-xs sm:text-lg text-white  bg-black px-4 py-2 rounded-md">Not sure where to go? Perfect.</p>

                
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button className="text-white shadow-md font-bold hover:shadow-xl active:scale-90 transition duration-300 mt-32 rounded-full bg-rose-500 px-10 py-4">I am flexeble</button>
            </div>
        </div>
    )
}

export default Banner;
