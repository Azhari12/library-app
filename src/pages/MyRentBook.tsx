import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import { useState, FC, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

interface booksType {
  id: number;
  title: string;
  content: string;
  username: string;
  image: string;
}

const MyRentBook: FC = () => {
  const [datas, setDatas] = useState<booksType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get("books")
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

  return (
    <Layout>
      <Navbar cart={false} />
      <div className="container mx-auto px-16">
        <div>
          <p className="text-4xl font-bold"> My Rented Books </p>
        </div>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center mt-10">
          {datas.map((data) => {
            return (
              <Card
                key={data.id}
                title={data.title}
                content={data.content}
                username={data.username}
                image={data.image}
                buttonLeft="Read Book"
                buttonRight="Return"
                buttonConfirm="Confirm Read"
              />
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

export default MyRentBook;
