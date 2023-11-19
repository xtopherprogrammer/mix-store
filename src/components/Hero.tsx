import { Icon } from "@iconify/react";
import Button from '../components/Button';

function Hero() {
  
  return (
    <>
    <div className="md:flex md:justify-center">
      <div className="text-5xl text-textColor text-center md:text-left gap-3 mb-6 mt-5 md:mb-6 md:mt-5">
        <h2>Clean Mix</h2>
        <h2>Pristine Sound</h2>
        <h2>Powerful Output</h2>
      </div>
      <div className="flex items-center  justify-center flex-col text-6xl text-textColor md:flex-row md:text-7xl">
        <Icon icon="material-symbols:speaker" />
        <Icon icon="lucide:mic-2" />
        <Icon icon="mdi:mixer-settings-vertical" />
      </div>
     
    </div>
    <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-textColor to-orange">The World's NO 1 Online Mixing & Mastering Studio</p>
    <div>
      <Button />
    </div>
    </>
  );
}

export default Hero;
