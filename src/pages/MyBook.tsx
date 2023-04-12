import React from "react";
import Layout from "@/components/Layout";

import { SlPencil } from "react-icons/sl";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import Navbar from "@/components/Navbar";

const MyBook = () => {
  return (
    <Layout>
      <Navbar />
      <div className="container mx-auto">
        <p className="text-3xl font-semibold">My Book List</p>
        <p className="pt-1 text-slate-500">Manage My Book List</p>

        <div className="py-7">
          <button className="group rounded-lg h-12 w-48 bg-black font-bold text-lg text-white relative overflow-hidden">
            Add
            <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-150 group-hover:bg-white/25 rounded-2xl"></div>
          </button>
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
                  <tr className="text-gray-700 ">
                    <td className="px-24 py-5 border border-x-white">
                      <p className="font-semibold text-black">Naruto</p>
                    </td>
                    <td className="py-5 text-ms font-semibold border border-x-white max-w-sm">
                      <p className="truncate">
                        His goal may be to become the next Hokage, but his true
                        destiny will be much more complicated. The adventure
                        begins now!
                      </p>
                    </td>
                    <td className="px-10 py-5 text-xs border border-x-white">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {" "}
                        Available{" "}
                      </span>
                    </td>
                    <td className="px-24 py-5 text-sm border border-x-white">
                      <div className="flex gap-10">
                        <AiOutlineFileSearch
                          style={{
                            color: "#e99312",
                            fontSize: "32px",
                          }}
                        />
                        <SlPencil
                          style={{
                            color: "#33c4cd",
                            fontSize: "28px",
                          }}
                        />
                        <FiTrash2
                          style={{
                            color: "#db5252",
                            fontSize: "30px",
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-24 py-5 border border-x-white">
                      <p className="font-semibold text-black">Naruto</p>
                    </td>
                    <td className="py-5 text-ms font-semibold border border-x-white max-w-sm">
                      <p className="truncate">
                        His goal may be to become the next Hokage, but his true
                        destiny will be much more complicated. The adventure
                        begins now!
                      </p>
                    </td>
                    <td className="px-10 py-5 text-xs border border-x-white">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {" "}
                        Available{" "}
                      </span>
                    </td>
                    <td className="px-24 py-5 text-sm border border-x-white">
                      <div className="flex gap-10">
                        <AiOutlineFileSearch
                          style={{
                            color: "#e99312",
                            fontSize: "32px",
                          }}
                        />
                        <SlPencil
                          style={{
                            color: "#33c4cd",
                            fontSize: "28px",
                          }}
                        />
                        <FiTrash2
                          style={{
                            color: "#db5252",
                            fontSize: "30px",
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-24 py-5 border border-x-white">
                      <p className="font-semibold text-black">Naruto</p>
                    </td>
                    <td className="py-5 text-ms font-semibold border border-x-white max-w-sm">
                      <p className="truncate">
                        His goal may be to become the next Hokage, but his true
                        destiny will be much more complicated. The adventure
                        begins now!
                      </p>
                    </td>
                    <td className="py-5 text-xs border border-x-white">
                      <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                        {" "}
                        Rented{" "}
                      </span>
                    </td>
                    <td className="px-24 py-5 text-sm border border-x-white">
                      <div className="flex gap-10">
                        <AiOutlineFileSearch
                          style={{
                            color: "#e99312",
                            fontSize: "32px",
                          }}
                        />
                        <SlPencil
                          style={{
                            color: "#33c4cd",
                            fontSize: "28px",
                          }}
                        />
                        <FiTrash2
                          style={{
                            color: "#db5252",
                            fontSize: "30px",
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-700 ">
                    <td className="px-24 py-5 border border-x-white">
                      <p className="font-semibold text-black">Naruto</p>
                    </td>
                    <td className="py-5 text-ms font-semibold border border-x-white max-w-sm">
                      <p className="truncate">
                        His goal may be to become the next Hokage, but his true
                        destiny will be much more complicated. The adventure
                        begins now!
                      </p>
                    </td>
                    <td className="px-10 py-5 text-xs border border-x-white">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {" "}
                        Available{" "}
                      </span>
                    </td>
                    <td className="px-24 py-5 text-sm border border-x-white">
                      <div className="flex gap-10">
                        <AiOutlineFileSearch
                          style={{
                            color: "#e99312",
                            fontSize: "32px",
                          }}
                        />
                        <SlPencil
                          style={{
                            color: "#33c4cd",
                            fontSize: "28px",
                          }}
                        />
                        <FiTrash2
                          style={{
                            color: "#db5252",
                            fontSize: "30px",
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-24 py-5 border border-x-white">
                      <p className="font-semibold text-black">Naruto</p>
                    </td>
                    <td className="py-5 text-ms font-semibold border border-x-white max-w-sm">
                      <p className="truncate">
                        His goal may be to become the next Hokage, but his true
                        destiny will be much more complicated. The adventure
                        begins now!
                      </p>
                    </td>
                    <td className="py-5 text-xs border border-x-white">
                      <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                        {" "}
                        Rented{" "}
                      </span>
                    </td>
                    <td className="px-24 py-5 text-sm border border-x-white">
                      <div className="flex gap-10">
                        <AiOutlineFileSearch
                          style={{
                            color: "#e99312",
                            fontSize: "32px",
                          }}
                        />
                        <SlPencil
                          style={{
                            color: "#33c4cd",
                            fontSize: "28px",
                          }}
                        />
                        <FiTrash2
                          style={{
                            color: "#db5252",
                            fontSize: "30px",
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-24 py-5 border border-x-white">
                      <p className="font-semibold text-black">Naruto</p>
                    </td>
                    <td className="py-5 text-ms font-semibold border border-x-white max-w-sm">
                      <p className="truncate">
                        His goal may be to become the next Hokage, but his true
                        destiny will be much more complicated. The adventure
                        begins now!
                      </p>
                    </td>
                    <td className="py-5 text-xs border border-x-white">
                      <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                        {" "}
                        Rented{" "}
                      </span>
                    </td>
                    <td className="px-24 py-5 text-sm border border-x-white">
                      <div className="flex gap-10">
                        <AiOutlineFileSearch
                          style={{
                            color: "#e99312",
                            fontSize: "32px",
                          }}
                        />
                        <SlPencil
                          style={{
                            color: "#33c4cd",
                            fontSize: "28px",
                          }}
                        />
                        <FiTrash2
                          style={{
                            color: "#db5252",
                            fontSize: "30px",
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-24 py-5 border border-x-white">
                      <p className="font-semibold text-black">Naruto</p>
                    </td>
                    <td className="py-5 text-ms font-semibold border border-x-white max-w-sm">
                      <p className="truncate">
                        His goal may be to become the next Hokage, but his true
                        destiny will be much more complicated. The adventure
                        begins now!
                      </p>
                    </td>
                    <td className="py-5 text-xs border border-x-white">
                      <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                        {" "}
                        Rented{" "}
                      </span>
                    </td>
                    <td className="px-24 py-5 text-sm border border-x-white">
                      <div className="flex gap-10">
                        <AiOutlineFileSearch
                          style={{
                            color: "#e99312",
                            fontSize: "32px",
                          }}
                        />
                        <SlPencil
                          style={{
                            color: "#33c4cd",
                            fontSize: "28px",
                          }}
                        />
                        <FiTrash2
                          style={{
                            color: "#db5252",
                            fontSize: "30px",
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-700 ">
                    <td className="px-24 py-5 border border-x-white">
                      <p className="font-semibold text-black">Naruto</p>
                    </td>
                    <td className="py-5 text-ms font-semibold border border-x-white max-w-sm">
                      <p className="truncate">
                        His goal may be to become the next Hokage, but his true
                        destiny will be much more complicated. The adventure
                        begins now!
                      </p>
                    </td>
                    <td className="px-10 py-5 text-xs border border-x-white">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {" "}
                        Available{" "}
                      </span>
                    </td>
                    <td className="px-24 py-5 text-sm border border-x-white">
                      <div className="flex gap-10">
                        <AiOutlineFileSearch
                          style={{
                            color: "#e99312",
                            fontSize: "32px",
                          }}
                        />
                        <SlPencil
                          style={{
                            color: "#33c4cd",
                            fontSize: "28px",
                          }}
                        />
                        <FiTrash2
                          style={{
                            color: "#db5252",
                            fontSize: "30px",
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MyBook;
