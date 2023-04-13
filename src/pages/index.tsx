import { useState, FC, useEffect } from "react";
import { Link } from "react-router-dom";

import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavbarTest from "@/components/navabarTest";
import Card from "@/components/Card";
import axios from "axios";

interface booksType {
  id: number;
  title: string;
  content: string;
}

const Home: FC = () => {
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
        alert(message);
      })
      .catch((error) => {
        alert(error.toString());
      });
  }

  return (
    <Layout>
      <Navbar />
      {/* <NavbarTest /> */}
      <div className="container mx-auto p-16">
        <div>
          <p className="text-2xl font-bold"> Avalaible Books</p>
        </div>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {datas.map((data) => {
            return (
              <Card key={data.id} title={data.title} content={data.content} />
            );
          })}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
