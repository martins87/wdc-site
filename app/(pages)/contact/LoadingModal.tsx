import { FC } from "react";

const LoadingModal: FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-items-center bg-background/[87%] z-20">
      <span className="w-10 md:w-16 loading loading-dots text-main_color mx-auto"></span>
    </div>
  );
};

export default LoadingModal;
