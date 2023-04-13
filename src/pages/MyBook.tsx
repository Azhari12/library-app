import { AiOutlineFileSearch } from "react-icons/ai";
import { SlPencil } from "react-icons/sl";
import { FiTrash2 } from "react-icons/fi";

import axios from "axios";
import { useState, useEffect, FormEvent } from "react";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Naruto from "@/assets/89977_f.jpg";
import List from "@/components/List";

interface booksList {
  id: number;
  title: string;
  contents: string;
  status: string;
  image: any;
  username: string;
}

const MyBook = () => {
  const [dataUser, setDataUser] = useState<string>("");
  const [datas, setDatas] = useState<booksList[]>([]);
  const [objSubmit, setObjSubmit] = useState<Partial<booksList>>({});
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get("books", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NH0.njwxZfCyfpSfQH9Xk5v2rcvjBSkibWVtkjlXixh2V_o`,
        },
      })
      .then((res) => {
        const { data, message } = res.data;
        setDatas(data);
        // const { data } = res.data;
        console.log(res.data);
        // console.log("name", data.name);
        // setDataUser(data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  function handleChange(value: string | File, key: keyof typeof objSubmit) {
    console.log("objSubmit", { ...objSubmit });
    let temp = { ...objSubmit };
    temp[key] = value;
    console.log(dataUser);
    temp["username"] = dataUser;
    // temp["username"] = data.username;
    console.log("temp", temp);
    setObjSubmit(temp);
    console.log("objSubmit", objSubmit);
  }

  // add
  const addNewBook = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    console.log("cekdatanya", objSubmit);
    let key: keyof typeof objSubmit;

    for (key in objSubmit) {
      formData.append(key, objSubmit[key]);
      console.log(key, objSubmit[key]);
    }
    console.log(formData);

    axios
      .post("books", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NH0.njwxZfCyfpSfQH9Xk5v2rcvjBSkibWVtkjlXixh2V_o`,
        },
      })
      .then((response) => {
        const { data } = response.data;
        alert("susccess");
        // navigate("/");
      })
      .catch((error) => {
        // const { message } = error.response;
        alert("error");
      });
  };
  // add

  return (
    <Layout>
      <Navbar cart={false} />
      <div className="container mx-auto px-16 my-16">
        <p className="text-3xl font-semibold">My Book List</p>
        <p className="pt-1 text-slate-500">Manage My Book List</p>

        <div className="py-7">
          <label
            className="group rounded-lg h-12 w-48 bg-black font-bold text-lg text-white relative overflow-hidden btn capitalize"
            htmlFor="modalAddBook"
          >
            Add
            <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-150 group-hover:bg-white/25 rounded-2xl"></div>
          </label>
        </div>

        <section className="container mx-auto">
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-center">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-center text-slate-600 bg-white border-b border-gray-600">
                    <th className="py-3">Title</th>
                    <th className="py-3">Description</th>
                    <th className="py-3">Status</th>
                    <th className="py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {datas.map((data) => {
                    return (
                      <List
                        key={data.id}
                        title={data.title}
                        content={data.contents}
                        status={data.status}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      <input type="checkbox" id="modalAddBook" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white">
          <label
            htmlFor="modalAddBook"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-3xl font-bold">Add Book</h3>
          <figure className="flex justify-center items-center px-10 pt-10">
            <img
              src="https://i0.wp.com/roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg?resize=400%2C400&ssl=1"
              alt="pict"
              className="w-80 h-80 rounded-xl"
            />
          </figure>
          <form onSubmit={(event) => addNewBook(event)}>
            <div className="mb-3 flex flex-col gap-1">
              <div className="flex justify-center items-center pt-5"></div>
              <label
                htmlFor="titleBook"
                className="text-sm text-navy-700 dark:text-white font-bold"
              ></label>
              <input
                className="file-input max-w-xs bg-white"
                type="file"
                id="myFile"
                name="myFile"
                onChange={(event) => {
                  if (!event.currentTarget.files) {
                    return;
                  }
                  setImage(URL.createObjectURL(event.currentTarget.files[0]));
                  handleChange(event.currentTarget.files[0], "image");
                }}
              />
              <input
                type="text"
                id="titleBook"
                placeholder="Title"
                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                onChange={(event) => handleChange(event.target.value, "title")}
              />
              <label
                htmlFor="desc"
                className="text-sm text-navy-700 dark:text-white font-bold"
              ></label>
              <input
                type="text"
                id="desc"
                placeholder="Description"
                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                onChange={(event) =>
                  handleChange(event.target.value, "contents")
                }
              />
            </div>
            <div className="flex justify-center items-center py-3">
              <button className="group rounded-lg h-12 w-48 bg-black font-bold text-lg text-white relative overflow-hidden btn capitalize">
                Add
                <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-150 group-hover:bg-white/25 rounded-2xl"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default MyBook;
