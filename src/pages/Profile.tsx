import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { FC, useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router";
import { Navigate } from "react-router";

interface users {
  address?: string;
  email?: string;
  image?: any;
  name?: string;
  password?: string;
}
const Profile: FC = () => {
  const [data, setData] = useState<Partial<users>>({});
  const [objSubmit, setObjSubmit] = useState<Partial<users>>({});
  const [csrf, setCSRF] = useState<string>("");
  const navigate = useNavigate();
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get("users", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NH0.njwxZfCyfpSfQH9Xk5v2rcvjBSkibWVtkjlXixh2V_o`,
        },
      })
      .then((response) => {
        const { data } = response.data;
        console.log(data);
        // console.log(data.Csrf);
        // setCSRF(data.Csrf);
        setData(data);
      });
  }

  function handleChange(value: string | File, key: keyof typeof objSubmit) {
    let temp = { ...objSubmit }; // duplikat state objSubmit yang nantinya akan dimutasi nilainya
    temp[key] = value;
    // temp["username"] = data.username;
    setObjSubmit(temp);
    console.log("temp", temp);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData();
    let key: keyof typeof objSubmit;
    console.log(objSubmit);
    for (key in objSubmit) {
      formData.append(key, objSubmit[key]);
      console.log(key, objSubmit[key]);
    }
    console.log("csrf", csrf);
    // axios.defaults.headers.common["X-CSRF-Token"] = csrf;

    axios
      .put("users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NH0.njwxZfCyfpSfQH9Xk5v2rcvjBSkibWVtkjlXixh2V_o`,
        },
      })
      .then((response) => {
        alert("suksess");
        setObjSubmit({});
        navigate("/profile");
      })
      .catch((error) => {
        const { message } = error.response;
        alert(message);
      })
      .finally(() => fetchData());
  }

  return (
    <Layout>
      <Navbar cart={false} />
      <div className="container mx-0 max-w-full">
        <div className="flex justify-center min-h-screen">
          <div className="max-w-full w-full">
            <div className="bg-white shadow-xl overflow-hidden">
              <div className=" bg-cover bg-center h-80 profil-header bg-no-repeat"></div>
              <div className="flex pt-2 p-5 justify-center">
                <div className="bg-cover bg-center w-32 h-32 -mt-16 rounded-full border-4 border-white profil-content"></div>
              </div>
              <div>
                <p className="text-4xl font-bold text-center">{data.name}</p>
              </div>
              <div className="hidden md:block">
                <table className="px-5 mt-2 mb-6 mx-[27%] max-w-[29rem] text-lg font-bold">
                  <tr>
                    <td className=" w-1/2">Email Address</td>
                    <td className="">:</td>
                    <td className=" w-1/3">{data.email}</td>
                  </tr>
                  <tr>
                    <td className=" w-1/2">Password</td>
                    <td className="">:</td>
                    <td className=" w-1/3">{"**********"}</td>
                  </tr>
                  <tr>
                    <td className=" w-1/2">Address</td>
                    <td className="">:</td>
                    <td className=" w-1/3">{data.address}</td>
                  </tr>
                </table>
              </div>
              <div className="md:hidden sm:block">
                <table className="px-5 mt-2 mb-6 mx-[27%] max-w-[29rem] text-lg font-bold text-center">
                  <tr>
                    <td>
                      <tr className=" w-1/2">Email Address</tr>
                      <tr className=" w-1/3">{data.email}</tr>
                      <tr className=" w-1/2">Password</tr>
                      <tr className=" w-1/3">{"*********"}</tr>
                      <tr className=" w-1/2">Address</tr>
                      <tr className=" w-1/3">{data.address}</tr>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="flex justify-center w-full">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-primary bg-bg-navar m-5 hover:bg-bg-navar border-bg-navar"
                >
                  Edit Profile
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white max-w-[40rem] hero min-h-[91%]">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-[1rem] top-[-11px]"
          >
            ✕
          </label>
          <div className="hero-content flex-col lg:flex-row">
            <div className="p-5 lg:w-full mt-5">
              <form
                onSubmit={(event) => handleSubmit(event)}
                className="flex flex-col justify-center items-center"
              >
                <div className="bg-cover bg-center w-32 h-32 -mt-16 rounded-full border-4 border-white profil-content"></div>
                <label className="block font-medium text-gray-700">
                  Choose Photo
                </label>
                <input
                  type="file"
                  className="file-input max-w-xs bg-white"
                  placeholder="Choose Photo"
                  onChange={(event) => {
                    if (!event.currentTarget.files) {
                      return;
                    }
                    setImage(URL.createObjectURL(event.currentTarget.files[0]));
                    handleChange(event.currentTarget.files[0], "image");
                  }}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className=" border-2 border-slate-300 input w-full max-w-md bg-white m-2"
                  defaultValue={data.email}
                  onChange={(event) =>
                    handleChange(event.target.value, "email")
                  }
                />
                <input
                  type="text"
                  placeholder="Name"
                  className=" border-2 border-slate-300 input w-full max-w-md bg-white m-2 "
                  defaultValue={data.name}
                  onChange={(event) => handleChange(event.target.value, "name")}
                />
                <input
                  type="password"
                  placeholder="Create Password"
                  className=" border-2 border-slate-300 input w-full max-w-md bg-white m-2 "
                  defaultValue={data.password}
                  onChange={(event) =>
                    handleChange(event.target.value, "password")
                  }
                />
                <input
                  type="text"
                  placeholder="Address"
                  className=" border-2 border-slate-300 input w-full max-w-md bg-white m-2 "
                  defaultValue={data.address}
                  onChange={(event) =>
                    handleChange(event.target.value, "address")
                  }
                />
                <button className="btn w-full m-3 wfu">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Profile;
