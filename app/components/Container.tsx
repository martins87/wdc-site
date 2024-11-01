import { FC, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-[90%] sm:w-[95%] lg:w-[80%] flex items-center justify-center mx-auto">
      {children}
    </div>
  );
};

export default Container;
