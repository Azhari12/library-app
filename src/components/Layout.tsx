import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = (props) => {
  return (
    <div className="bg-slate-200 flex justify-center main h-screen ">
      <div className=" transition-all bg-slate-200 container ">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
