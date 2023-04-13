import { FC } from "react";

import Naruto from "@/assets/89977_f.jpg";

interface Props {
  title: string;
  content: string;
}

const Modal: FC<Props> = (props) => {
  const { title, content } = props;
  return (
    <>
      <input type="checkbox" id="modalDetailBook" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white max-w-[50rem] hero min-h-[75%]">
          <label
            htmlFor="modalDetailBook"
            className="btn btn-sm btn-circle absolute right-[1rem] top-[-11px]"
          >
            ✕
          </label>
          <div className="hero-content flex-col lg:flex-row">
            <img src={Naruto} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">{title}</h1>
              <p className=" text-sm text-gray-500">Yusuf's Book</p>
              <p className="py-6">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
