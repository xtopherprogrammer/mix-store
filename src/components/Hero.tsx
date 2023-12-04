import { Icon } from "@iconify/react";
import Button from "../components/Button";

function Hero() {
  return (
    <>
      <div className="md:flex md:justify-center gap-20 py-10">
        <div className="text-5xl text-textColo text-center md:text-left  mb-6 mt-5 md:mb-6 md:mt-5">
          <h2>Clean Mix</h2>
          <h2>Pristine Sound</h2>
          <h2>Powerful Output</h2>
        </div>
        <div className="flex items-center  justify-center text-6xl text-textColo md:flex-row md:text-7xl pb-10">
          <Icon icon="material-symbols:speaker" />
          <Icon icon="lucide:mic-2" />
          <Icon icon="mdi:mixer-settings-vertical" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-gradient1 to-gradient2 py-7">
        <div className="flex grid  justify-center flex-col text-transparent bg-clip-text bg-gradient-to-r from-textColor to-orange pt-5 text-3xl">
          <p className="max-w-sm md:max-w-none">The World's NO 1 Online Mixing & Mastering Studio</p>
         
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className="pt-5">
            <Button />
          </div>
          <Icon className="text-9xl " icon="game-icons:sound-waves" />
        </div>
      </div>
    </>
  );
}

export default Hero;
