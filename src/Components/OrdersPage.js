import { useEffect, useState } from "react";
import { format } from "date-fns";

function OrdersPage() {
  const [page, setPage] = useState(1);
  const [datas, setDatas] = useState([]);
  const [message, setMessage] = useState("");
  const [dataLength, setDataLength] = useState(0);
  const [totalPages, setTotalPages] = useState([]);
  const [details, setDetails] = useState({});

  function getData() {
    const token = sessionStorage.getItem("token");
    if (page > totalPages) setPage(1);
    const query = `?page=${page}`;
    fetch(`http://localhost:3000/orders${query}`, {
      method: "GET",
      headers: { Authorization: token },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDataLength(data.length);
        setDatas(data.order);
      });
  }

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    const page = Math.ceil(dataLength / 5);
    const arr = [];
    for (let i = 1; i <= page; i++) {
      arr.push(i);
    }
    setTotalPages(arr);
  }, [datas]);

  async function remove(data) {
    if (data.status === "Pending") {
      setMessage("Cannot remove Pending orders");
      return;
    }
    const token = sessionStorage.getItem("token");
    const id = data._id;
    fetch(`https://drcar.onrender.com/orders/${id}`, {
      method: "DELETE",
      headers: { Authorization: token },
    })
      .then((res) => {
        return res.json();
      })
      .then((msg) => {
        setMessage(msg.message);
      });
  }

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
      getData();
    }, 5000);
  }, [message]);

  function getDetails(dataid) {
    const token = sessionStorage.getItem("token");
    fetch(`https://drcar.onrender.com/orders/${dataid}`, {
      method: "GET",
      headers: { Authorization: token },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDetails(data);
      });
  }

  return (
    <div className="w-screen lg:mt-40 px-10">
      {/* POPUP */}

      {message ? (
        <>
          <div className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center bg-gray-800 opacity-80 z-40"></div>
          <div className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center z-50">
            <div className="fixed z-50 bg-green-500 flex justify-center items-center flex-col p-5 gap-5 w-5/6 sm:w-3/6 lg:w-1/4 rounded font-semibold">
              <p className="text-center break-words w-full">{message}</p>
              <span
                className="px-4 py-2 bg-blue-800 hover:bg-blue-600 rounded text-white ease-in-out duration-300 cursor-pointer"
                onClick={() => {
                  setMessage("");
                  getData();
                }}
              >
                OK
              </span>
            </div>
          </div>
        </>
      ) : null}

      {Object.keys(details).length === 0 ? (
        <>
          <table className="w-full text-center rounded overflow-hidden table-fixed">
            <thead>
              <tr className="bg-gray-900 text-white font-semibold">
                <th className="py-4">Date</th>
                <th className="py-4 hidden md:table-cell">ID</th>
                <th className="py-4 hidden md:table-cell">Status</th>
                <th className="py-4">Services</th>
                <th className="py-4">Remove</th>
              </tr>
            </thead>
            <tbody>
              {datas?.map((data, i) => {
                return (
                  <tr key={i} className="bg-gray-700 text-white font-semibold">
                    <td className="py-4">
                      {format(new Date(data.createdAt), "dd/MM/yyyy")}
                    </td>
                    <td className="py-4 hidden md:table-cell">{data._id}</td>
                    <td className="py-4 hidden md:table-cell">{data.status}</td>
                    <td className="py-2">
                      <button
                        className="bg-green-800 px-3 py-2 rounded hover:bg-green-600 ease-in-out duraton-500"
                        onClick={() => getDetails(data._id)}
                      >
                        Info
                      </button>
                    </td>
                    <td className="py-2">
                      <button
                        className="bg-red-800 px-3 py-2 rounded hover:bg-red-600 ease-in-out duraton-500"
                        onClick={() => remove(data)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="mt-10 flex justify-center items-center gap-3">
            {totalPages?.map((data, i) => {
              return (
                <button
                  className="bg-blue-800 hover:bg-blue-600 text-white px-3 py-2 font-semibold rounded"
                  onClick={() => setPage(data)}
                  key={i}
                >
                  {data}
                </button>
              );
            })}
          </div>
        </>
      ) : null}
      {Object.keys(details).length !== 0 ? (
        <div
          className="flex flex-col justify-center items-start gap-5 font-semibold"
          id="print"
        >
          <span>Order ID : {details._id}</span>
          <span>Name : {details.user.toUpperCase()}</span>
          <span>
            Date : {format(new Date(details.createdAt), "dd/MM/yyyy")}
          </span>
          <span>Address : {details.address}</span>
          <span>Car : {details.brand}</span>
          <span>Model : {details.model}</span>
          <span>Services : {details.services}</span>
          <span>Fuel Type : {details.fuel}</span>
          <div className="flex justify-center items-center gap-5 w-full">
            <button
              className="bg-blue-800 hover:bg-blue-600 text-white px-3 py-2 font-semibold rounded"
              onClick={() =>  window.print()}
            >
              Print
            </button>
            <button
              className="bg-blue-800 hover:bg-blue-600 text-white px-3 py-2 font-semibold rounded"
              onClick={() => setDetails({})}
            >
              Go Back
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default OrdersPage;
