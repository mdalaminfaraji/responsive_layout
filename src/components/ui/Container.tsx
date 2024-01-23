import { ReactNode } from "react";
type TContainer = {
  children: ReactNode;
};
const Container = ({ children }: TContainer) => {
  return (
    <div className="w-full max-w-[1220px] px-[20px] mx-auto">{children}</div>
  );
};

export default Container;
