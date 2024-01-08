import { Icon } from "@iconify/react";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <nav>
        <div className="flex justify-between items-center px-10 py-5 flex-wrap w-full">
          <div className="text-3xl font-semi text-black">
            <a href="#">mix master</a>
          </div>
          <div className="md:hidden text-orange text-2xl hover:cursor-pointer">
            <Icon onClick={handleClick} icon="ep:menu" />
          </div>

          <ul
            className={`${
              isOpen ? "" : "hidden"
            } flex items-center text-textColo md:flex flex-col w-full md:w-auto md:flex-row gap-3`}
          >
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
              <a href="/login">Sign in</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Header;
