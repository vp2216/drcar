import { useState,useEffect } from "react";
import Nav from "./Nav";
import Main from "./Main";
import { useNavigate } from "react-router-dom";

function Home({ dark }) {
  const [user, setUser] = useState("Loading...");
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
      className={`flex flex-col lg:w-screen lg:h-screen box-borde ${
        dark ? "bg-gray-800 text-white" : "bg-gray-300 text-black"
      }`}
    >
      <Nav />
      <div className="main-div flex justify-center lg:fixed w-full lg:h-full top-8">
        {user ? (
          <Main />
        ) : (
          <div className="flex justify-center items-center w-screen h-screen gap-5 flex-col font-semibold">
            <div className="text-xl">Session expired please login again</div>
            <button className="px-5 py-2 bg-green-500 rounded text-black" onClick={()=>navigate("/")}>Go to login</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
