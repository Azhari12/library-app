import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = (props) => {
  return (
    <div className="bg-white main h-screen text-library-black">
      <div className=" transition-all bg-white">{props.children}</div>
    </div>
  );
};

export default Layout;
