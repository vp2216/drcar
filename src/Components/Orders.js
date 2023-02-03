import { useState, useEffect } from "react";
import Nav from "./Nav";
import OrdersPage from "./OrdersPage";
import { useNavigate } from "react-router-dom";

function Orders({ dark }) {
  const [user, setUser] = useState("load");

  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    fetch("http://localhost:3000/orders/user", {
      method: "GET",
      headers: { Authorization: token },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.name) setUser(data.name);
        else setUser("");
      });
  }, []);

  return (
    <div
      className={`flex flex-col w-screen h-screen ${
        dark ? "bg-gray-800 text-white" : "bg-gray-300 text-black"
      }`}
    >
      <Nav />
      {user ? (
        <div className="relative flex justify-center items-center">
          {user === "load" ? <div className="text-black text-2xl md:text-3xl lg:text-4xl mt-40 absolute -top-48  md:-top-52 lg:-top-16 font-bold">Loading...</div> : null}
          <OrdersPage />
        </div>
      ) : (
        <div className="flex justify-center items-center w-screen h-screen gap-5 flex-col font-semibold">
          <div className="text-xl">Session expired please login again</div>
          <button
            className="px-5 py-2 bg-green-500 rounded text-black"
            onClick={() => navigate("/")}
          >
            Go to login
          </button>
        </div>
      )}
    </div>
  );
}

export default Orders;
