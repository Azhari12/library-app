import { FC } from "react";

interface Props {
  title: string;
  content: string;
}

const Card: FC<Props> = (props) => {
  const { title, content } = props;
  return (
    <div className="card w-72 bg-white shadow-lg p-2">
      <figure className="px-10 pt-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          alt="Books"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center p-2">
        <h2 className="card-title">{title}</h2>
        <p>{content}...</p>
        <div className="card-actions flex flex-row w-full justify-center text-lg my-card font-medium ">
          <button className=" p-[0.5rem] text-white bg-library-logo border border-library-logo">
            Rent Now
          </button>
          <button className="p-[0.5rem] bg-white border border-bg-navar text-library-logo">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
