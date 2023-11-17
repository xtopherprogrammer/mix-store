import menu from "../assets/menu.svg";

function Header() {
  return (
    <>
      <nav>
        <div className="flex justify-between items-center px-10 py-5">
          <div className="text-3xl font-semi text-textColor">
            <a href="#">mix master</a>
          </div>
          <div className="md:hidden">
            <a href="#">
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>

          <ul className="flex items-center text-textColor hidden md:flex">
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
              <button className="py-2 px-4 bg-orange text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                <a href="#">Register</a>
              </button>
            </li>
            <li className="mx-2">
              <a href="#">Sign in</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Header;
