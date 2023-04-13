import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import { FC, useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";

import image from "@/assets/89977_f.jpg";

interface booksType {
  id: number;
  title: string;
  content: string;
  username: string;
  image: string;
}

const Cart: FC = () => {
  const [carts, setCarts] = useState<booksType[]>([]);

  let sendCart: number[];

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const myString: string | null = localStorage.getItem("cart");
    if (myString !== null) {
      // setCarts(JSON.parse(myString));
      console.log(carts);
      const cartArray = JSON.parse(myString);
      cartArray.map((data: any) => {
        fetchBooks(data);
      });
    }
  }

  function fetchBooks(id: number) {
    console.log(carts);
  }

  return (
    <Layout>
      <div className=" sticky top-0 w-full">
        <Navbar cart={false} />
      </div>
      <div className="container mx-auto px-16 overflow-auto h-[19.55rem] mt-10">
        <div className=" ">
          <p className="text-4xl font-bold"> Your Cart Rent</p>
        </div>
        <div className=" m-10">
          {carts.map((data) => {
            return (
              <div className="hero min-h-full bg-white">
                <div className="hero-content flex-col lg:flex-row items-start">
                  <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl h-[15rem]"
                  />
                  <div className="grid grid-cols-4">
                    <div className=" col-span-3">
                      <h1 className="text-5xl font-bold">{data.title}</h1>
                      <p className=" text-md text-gray-500">
                        {data.username}'s Book
                      </p>
                      <p className="py-6">{data.content}</p>
                    </div>
                    <div className="flex h-full w-full justify-center items-center">
                      <button>
                        <FiTrash2
                          style={{
                            color: "#db5252",
                            fontSize: "50px",
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" absolute bottom-0 w-full">
        <div className="flex justify-center w-full">
          <button className="btn btn-primary bg-bg-navar m-5">
            Confirm Rent
          </button>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Cart;
