import { useState, FC, useEffect } from "react";
import { Link } from "react-router-dom";
import images from "@/assets/89977_f.jpg";

import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import axios from "axios";
import Footer from "@/components/Footer";
import { string } from "prop-types";

interface booksType {
  id: number;
  title: string;
  content: string;
  username: string;
  image: string;
  status: string;
}

const Home: FC = () => {
  const [datas, setDatas] = useState<booksType[]>([]);
  // let cart: booksType[] = [];
  let cart: number[] = [];
  // const [isAdded, setAdded] = useState<boolean>(false);

  useEffect(() => {
    fetchData(), console.log(cart);
  }, []);

  function fetchData() {
    // localStorage.removeItem("cart");
    axios
      .get("books", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NH0.njwxZfCyfpSfQH9Xk5v2rcvjBSkibWVtkjlXixh2V_o",
        },
      })
      .then((response) => {
        const { data, message } = response.data;
        setDatas(data);
        console.log(data);
        // alert(message);
      })
      .catch((error) => {
        alert(error.toString());
      });
  }

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

  function handleAddCart(
    bookId: number
    // username: string,
    // title: string,
    // content: string,
    // image: string
  ) {
    const myString: string | null = localStorage.getItem("cart");

    // const data = {
    //   id: bookId,
    //   username: username,
    //   title: title,
    //   content: content,
    //   image: image,
    // };
    if (myString !== null) {
      cart = JSON.parse(myString);
      // cart.push(data);
      cart.push(bookId);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      // cart.push(data);
      cart.push(bookId);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    alert(myString);
  }

  return (
    <Layout>
      <Navbar cart={true} />
      {/* <NavbarTest /> */}
      <div className="container mx-auto px-16 my-16">
        <div>
          <p className="text-4xl font-bold"> Avalaible Books</p>
        </div>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center mt-10">
          {datas.map((data) => {
            return (
              <div className="card w-[15rem] bg-white shadow-lg p-2 h-[90%]">
                <figure className="px-3 pt-3 h-2/3">
                  <img
                    src={images}
                    alt="Books"
                    className="rounded-xl object-fill"
                  />
                </figure>
                <div className="card-body text-justify p-2 max-h-[10rem]">
                  <p className=" text-sm text-gray-500">
                    {data.username}'s Book
                  </p>
                  <h4 className="card-title text-sm truncate  hover:overflow-clip">
                    {data.title}
                  </h4>
                  <p className=" text-xs">{data.content}...</p>
                  <div className=" flex flex-row w-full justify-center text-sm my-card font-medium gap-2">
                    <label
                      htmlFor="my-modal-3"
                      className="cursor-pointer p-[0.5rem] text-white bg-bg-navar border border-bg-navar w-full text-center"
                    >
                      Rent Now
                    </label>
                    <button
                      className="cursor-pointer p-[0.5rem] bg-white border border-gray-500 text-bg-navar w-full text-center"
                      // onClick={(event) => {
                      //   handleAddCart(
                      //     data.id,
                      //     data.username,
                      //     data.title,
                      //     data.content,
                      //     data.image
                      //   );
                      // }}
                      onClick={(event) => {
                        handleAddCart(data.id);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative bg-white max-w-[50rem] hero min-h-[75%]">
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-sm btn-circle absolute right-[1rem] top-[-11px]"
                    >
                      ✕
                    </label>
                    <div className="hero-content flex-col lg:flex-row">
                      <img
                        src={images}
                        className="max-w-sm rounded-lg shadow-2xl"
                      />
                      <div>
                        <h1 className="text-5xl font-bold">Naruto Comic</h1>
                        <p className=" text-sm text-gray-500">Yusuf's Book</p>
                        <p className="py-6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam tincidunt nisl blandit, euismod risus vitae,
                          placerat sapien. Pellentesque habitant morbi tristique
                          senectus et netus et malesuada fames ac turpis
                          egestas. Suspendisse ornare enim non sem varius, eget
                          lobortis eros convallis. Maecenas pretium aliquam
                          massa et elementum. Sed vitae aliquet enim, eget
                          egestas nisl. Proin sodales ipsum id felis commodo
                          porttitor. In lobortis quam vitae sem eleifend, sed
                          fermentum nisi vulputate. Cras eget convallis ex.
                        </p>
                        <button
                          className="btn btn-primary bg-bg-navar hover:bg-bg-navar"
                          onClick={(event) => handleSubmitOneRent([1])}
                        >
                          Confirm Rent
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="btn-group flex  justify-center border-t-2 ">
          <button className="btn bg-transparent border-none text-bg-navar hover:text-white">
            <p className="text-lg ">«</p>
          </button>
          <button className="btn bg-transparent border-none text-bg-navar hover:text-white">
            <p className="text-sm">1</p>
          </button>
          <button className="btn bg-transparent border-none text-bg-navar hover:text-white">
            <p className="text-sm">2</p>
          </button>
          <button className="btn bg-transparent border-none text-bg-navar hover:text-white">
            <p className="text-sm">...</p>
          </button>
          <button className="btn bg-transparent border-none text-bg-navar hover:text-white">
            <p className="text-sm ">9</p>
          </button>
          <button className="btn bg-transparent border-none text-bg-navar hover:text-white">
            <p className="text-sm ">10</p>
          </button>
          <button className="btn bg-transparent border-none text-bg-navar hover:text-white">
            <p className="text-lg ">»</p>
          </button>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
