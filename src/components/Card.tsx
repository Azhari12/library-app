import { FC } from "react";
import images from "@/assets/89977_f.jpg";
import axios from "axios";
import Cart from "@/pages/Cart";

interface Props {
  bookId: number;
  username: string;
  title: string;
  content: string;
  image: string;
  buttonLeft: string;
  buttonRight: string;
  buttonConfirm: string;
}

const Card: FC<Props> = (props) => {
  const {
    bookId,
    title,
    content,
    username,
    image,
    buttonLeft,
    buttonRight,
    buttonConfirm,
  } = props;
  const cart: number[] = [];

  const handleSubmitOneRent = (bookRent: number[]) => {
    axios
      .post("transactions", bookRent)
      .then((response) => {
        const { message } = response.data;
        alert(message);
      })
      .catch((error) => {
        const { message } = error.response;
        alert(message);
      });
  };

  function handleSubmitRead() {
    return "assad";
  }

  function handleAddCart(bookId: number) {
    cart.push(bookId);
    alert(cart);
  }

  return (
    <div className="card w-[15rem] bg-white shadow-lg p-2 h-[90%]">
      <figure className="px-3 pt-3 h-2/3">
        <img src={images} alt="Books" className="rounded-xl object-fill" />
      </figure>
      <div className="card-body text-justify p-2 max-h-[10rem]">
        <p className=" text-sm text-gray-500">{username}'s Book</p>
        <h4 className="card-title text-sm truncate  hover:overflow-clip">
          {title}
        </h4>
        <p className=" text-xs">{content}...</p>
        <div className=" flex flex-row w-full justify-center text-sm my-card font-medium gap-2">
          <label
            htmlFor="my-modal-3"
            className="cursor-pointer p-[0.5rem] text-white bg-bg-navar border border-bg-navar w-full text-center"
          >
            {buttonLeft}
          </label>
          {buttonRight == "Add to Cart" ? (
            <button
              className="cursor-pointer p-[0.5rem] bg-white border border-gray-500 text-bg-navar w-full text-center"
              onClick={(event) => handleAddCart(bookId)}
            >
              {buttonRight}
            </button>
          ) : (
            <button className="cursor-pointer p-[0.5rem] bg-white border border-gray-500 text-bg-navar w-full text-center">
              {buttonRight}
            </button>
          )}
        </div>
      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white max-w-[50rem] hero min-h-[75%]">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-[1rem] top-[-11px]"
          >
            ✕
          </label>
          <div className="hero-content flex-col lg:flex-row">
            <img src={images} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Naruto Comic</h1>
              <p className=" text-sm text-gray-500">Yusuf's Book</p>
              <p className="py-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                tincidunt nisl blandit, euismod risus vitae, placerat sapien.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Suspendisse ornare enim non
                sem varius, eget lobortis eros convallis. Maecenas pretium
                aliquam massa et elementum. Sed vitae aliquet enim, eget egestas
                nisl. Proin sodales ipsum id felis commodo porttitor. In
                lobortis quam vitae sem eleifend, sed fermentum nisi vulputate.
                Cras eget convallis ex.
              </p>
              {buttonConfirm == "Confirm Rent" ? (
                <button
                  className="btn btn-primary bg-bg-navar hover:bg-bg-navar"
                  onClick={(event) => handleSubmitOneRent([1])}
                >
                  Confirm Rent
                </button>
              ) : (
                <button className="btn btn-primary bg-bg-navar hover:bg-bg-navar">
                  Confirm Read
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
