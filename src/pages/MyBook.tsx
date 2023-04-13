import { AiOutlineFileSearch } from "react-icons/ai";
import { SlPencil } from "react-icons/sl";
import { FiTrash2 } from "react-icons/fi";

import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Naruto from "@/assets/89977_f.jpg";

const MyBook = () => {
  return (
    <Layout>
      <Navbar />
      <div className="container mx-auto">
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
                  <tr className="text-gray-700 ">
                    <td className="px-24 py-5 border border-x-white">
                      <p className="font-semibold text-black">Naruto</p>
                    </td>
                    <td className="py-5 text-ms font-semibold border border-x-white">
                      His goal may be to become the next Hokage, but his true
                      destiny will be...
                    </td>
                    <td className="px-10 py-5 text-xs border border-x-white">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {" "}
                        Available{" "}
                      </span>
                    </td>
                    <td className="px-24 py-5 text-sm border border-x-white">
                      <div className="flex gap-10">
                        <label
                          htmlFor="modalDetailBook"
                          className="hover:bg-orange-300 hover:bg-opacity-25 hover:scale-150 rounded-2xl"
                        >
                          <AiOutlineFileSearch
                            style={{
                              color: "#e99312",
                              fontSize: "32px",
                            }}
                          />
                        </label>
                        <label
                          htmlFor="modalUpdateBook"
                          className="hover:bg-blue-300 hover:bg-opacity-25 hover:scale-150 rounded-2xl"
                        >
                          <SlPencil
                            style={{
                              color: "#33c4cd",
                              fontSize: "28px",
                            }}
                          />
                        </label>
                        <FiTrash2
                          className="hover:bg-red-300 hover:bg-opacity-25 hover:scale-150 rounded-2xl"
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
                    <td className="py-5 text-ms font-semibold border border-x-white">
                      His goal may be to become the next Hokage, but his true
                      destiny will be...
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
                    <td className="py-5 text-ms font-semibold border border-x-white">
                      His goal may be to become the next Hokage, but his true
                      destiny will be...
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
                    <td className="py-5 text-ms font-semibold border border-x-white">
                      His goal may be to become the next Hokage, but his true
                      destiny will be...
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
                    <td className="py-5 text-ms font-semibold border border-x-white">
                      His goal may be to become the next Hokage, but his true
                      destiny will be...
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
                    <td className="py-5 text-ms font-semibold border border-x-white">
                      His goal may be to become the next Hokage, but his true
                      destiny will be...
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
                    <td className="py-5 text-ms font-semibold border border-x-white">
                      His goal may be to become the next Hokage, but his true
                      destiny will be...
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
                    <td className="py-5 text-ms font-semibold border border-x-white">
                      His goal may be to become the next Hokage, but his true
                      destiny will be...
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

      {/* Modal */}
      <input type="checkbox" id="modalUpdateBook" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="modalUpdateBook"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-3xl font-bold">Update Book</h3>
          <figure className="flex justify-center items-center px-10 pt-10">
            <img
              src={Naruto}
              alt="pict"
              className="w-80 object-contain max-h-[25rem] rounded-xl"
            />
          </figure>
          <div className="flex justify-center items-center pt-5">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg capitalize bg-white text-black font-bold">
              Choose Image
            </button>
          </div>
          <div className="mb-3 flex flex-col gap-1">
            <label
              htmlFor="titleBook"
              className="text-sm text-navy-700 dark:text-white font-bold"
            ></label>
            <input
              type="text"
              id="titleBook"
              value="Naruto"
              className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
            />
            <label
              htmlFor="desc"
              className="text-sm text-navy-700 dark:text-white font-bold"
            ></label>
            <input
              type="text"
              id="desc"
              value="His goal may be to become the next Hokage, but his true destiny will be much more complicated. The adventure begins now!"
              className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
            />
          </div>
          <div className="flex justify-center items-center py-3">
            <button className="group rounded-lg h-12 w-48 bg-black font-bold text-lg text-white relative overflow-hidden btn capitalize">
              Add
              <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-150 group-hover:bg-white/25 rounded-2xl"></div>
            </button>
          </div>
        </div>
      </div>

      <input type="checkbox" id="modalAddBook" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
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
          <div className="flex justify-center items-center pt-5">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg capitalize bg-white text-black font-bold">
              Choose Image
            </button>
          </div>
          <div className="mb-3 flex flex-col gap-1">
            <label
              htmlFor="titleBook"
              className="text-sm text-navy-700 dark:text-white font-bold"
            ></label>
            <input
              type="text"
              id="titleBook"
              placeholder="Title"
              className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
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
            />
          </div>
          <div className="flex justify-center items-center py-3">
            <button className="group rounded-lg h-12 w-48 bg-black font-bold text-lg text-white relative overflow-hidden btn capitalize">
              Add
              <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-150 group-hover:bg-white/25 rounded-2xl"></div>
            </button>
          </div>
        </div>
      </div>

      <input type="checkbox" id="modalDetailBook" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white max-w-[50rem] hero min-h-[75%]">
          <label
            htmlFor="modalDetailBook"
            className="btn btn-sm btn-circle absolute right-[1rem] top-[-11px]"
          >
            ✕
          </label>
          <div className="hero-content flex-col lg:flex-row">
            <img src={Naruto} className="max-w-sm rounded-lg shadow-2xl" />
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default MyBook;
