import Layout from "@/components/Layout";
import { FC, useState, useEffect, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

interface ObjSubmitType {
  email: string;
  name: string;
  password: string;
  address: string;
  image: any;
}

const Register: FC = () => {
  const [objSubmit, setObjSubmit] = useState<Partial<ObjSubmitType>>({
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
  });
  const navigate = useNavigate();

  function handleChange(value: string | File, key: keyof typeof objSubmit) {
    let temp = { ...objSubmit }; // duplikat state objSubmit yang nantinya akan dimutasi nilainya
    temp[key] = value;
    // temp["username"] = data.username;
    setObjSubmit(temp);
    console.log("temp", temp);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(objSubmit);

    const formData = new FormData();
    let key: keyof typeof objSubmit;
    for (key in objSubmit) {
      formData.append(key, objSubmit[key]);
      console.log(key, objSubmit[key]);
    }
    console.log(formData);

    // axios
    // .post("/auth/register", objSubmit, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // })

    axios
      .post("register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
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
  }

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen flex-col w-full">
          <div className=" justify-center text-center">
            <span className="self-center text-4xl font-extrabold whitespace-nowrap text-library-logo">
              Library App
            </span>{" "}
            <p className="text-2xl font-bold">Create Free Account</p>
          </div>
          <div className="border shadow-sm shadow-slate-800 box p-5 lg:w-2/5 mt-5">
            <form
              className="flex flex-col justify-center items-center "
              onSubmit={(event) => handleSubmit(event)}
            >
              <input
                type="email"
                placeholder="Email Address"
                className=" border-2 border-slate-300 input w-full max-w-md bg-white m-2 text-center"
                onChange={(event) => handleChange(event.target.value, "email")}
              />
              <input
                type="text"
                placeholder="Name"
                className=" border-2 border-slate-300 input w-full max-w-md bg-white m-2 text-center"
                onChange={(event) => handleChange(event.target.value, "name")}
              />
              <input
                type="password"
                placeholder="Create Password"
                className=" border-2 border-slate-300 input w-full max-w-md bg-white m-2 text-center"
                onChange={(event) =>
                  handleChange(event.target.value, "password")
                }
              />
              <input
                type="text"
                placeholder="Address"
                className=" border-2 border-slate-300 input w-full max-w-md bg-white m-2 text-center"
                onChange={(event) =>
                  handleChange(event.target.value, "address")
                }
              />
              <button className="btn w-full m-3 wfu">Sign Up</button>
            </form>

            <p className=" text-center font-medium text-gray-500">
              Already have an account?{" "}
              {
                <Link className=" text-library-logo" to={"/login"}>
                  Sign in
                </Link>
              }
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
