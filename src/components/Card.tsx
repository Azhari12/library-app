import { FC } from "react";

interface Props {
  title: string;
  content: string;
}

const Card: FC<Props> = (props) => {
  const { title, content } = props;
  return (
    <div className="card w-[15rem] bg-white shadow-lg p-2">
      <figure className="px-10 pt-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          alt="Books"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body text-justify p-2">
        <h4 className="card-title text-sm">{title}</h4>
        <p className=" text-xs">{content}...</p>
        <div className=" flex flex-row w-full justify-center text-sm my-card font-medium gap-2">
          <button className=" p-[0.5rem] text-white bg-library-logo border border-library-logo w-full">
            Rent Now
          </button>
          <button className="p-[0.5rem] bg-white border border-bg-navar text-library-logo w-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
