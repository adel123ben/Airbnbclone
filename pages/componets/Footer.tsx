const Footer = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-4 border-t-2 border-gray-200 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="text-xs space-y-4 text-gray-800">
                <h5 className="font-bold">About</h5>
                <p>How Airbnb works</p>
                <p>Investor</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className="text-xs space-y-4 text-gray-800">
            <h5 className="font-bold">Comunity</h5>
                <p>Accebility</p>
                <p>This is not a real site</p>
                <p>All acsepts</p>
                <p>Adel benmouhoub</p>
            </div>

            <div className="text-xs space-y-4 text-gray-800">
            <h5 className="font-bold">Host</h5>
                <p>Accebility</p>
                <p>Zero full stack hero</p>
                <p>The boss</p>
                <p>Join now</p>
            </div>
        </div>
    )
}

export default Footer;