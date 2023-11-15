
export default function Header() {
    return <>
    <nav>
        <div className="flex justify-between px-10 py-5">
            <div className="text-4xl font-bold text-textColor">Mix Master</div>
            <ul className="flex items-center text-textColor">
                <li className="mx-2">
                    <a href="#">Home</a>
                </li>
                <li className="mx-2">
                    <a href="#">Pricing</a>
                </li>
                <li className="mx-2">
                    <a href="#">Samples</a>
                </li>
                <li className="mx-2">
                    <button className="py-2 px-4 bg-orange text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"><a href="#">Register</a></button>
                </li>
                <li className="mx-2">
                    <a href="#">Sign in</a>
                </li>
            </ul>
        </div>
    
    </nav>
    </>
}