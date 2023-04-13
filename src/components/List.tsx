import { FC } from "react";

import { AiOutlineFileSearch } from "react-icons/ai";
import { SlPencil } from "react-icons/sl";
import { FiTrash2 } from "react-icons/fi";

interface Props {
  title: string;
  content: string;
  status: string;
}

const List: FC<Props> = (props) => {
  const { title, content, status } = props;

  return (
    <>
      <tr className="text-gray-700">
        <td className="px-24 py-5 border border-x-white">
          <p className="font-semibold text-black">{title}</p>
        </td>
        <td className="py-5 text-ms font-semibold border border-x-white">
          {content}
        </td>
        <td className="px-10 py-5 text-xs border border-x-white">
          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
            {" "}
            {status}{" "}
          </span>
        </td>
        <td className="pl-32 py-5 text-sm border border-x-white">
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
    </>
  );
};

export default List;
