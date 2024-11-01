import Clients from "./Clients";
import Main from "./Main";

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center">
      <div className="w-full lg:w-[60%] flex flex-col justify-start gap-y-32 mr-auto">
        <Main />
        <Clients />
      </div>
    </div>
  );
};

export default Hero;
