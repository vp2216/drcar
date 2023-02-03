import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../Assets/bg.jpg";
import { GoGear } from "react-icons/go";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(0);

  async function login(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("password", password);
    const res = await fetch("http://localhost:3000/user/register", {
      method: "POST",
      body: formdata,
    });
    const response = await res.json();
    setMessage(response.message);
    setStatus(res.status);
  }

    useEffect(() => {
      setTimeout(() => {
        setMessage("");
        if (status === 200) navigate("/");
      }, 5000);
    }, [message]);

  return (
    <div className="bg-gray-900 h-screen w-screen flex justify-center items-center">
      {/* POPUP */}

      {message ? (
        <div className="fixed z-50 bg-green-500 flex justify-center items-center flex-col p-5 gap-5 w-5/6 sm:w-3/6 lg:w-1/4 rounded font-semibold">
          <p className="text-center break-words w-full">{message}</p>
          <span
            className="px-4 py-2 bg-blue-800 hover:bg-blue-600 rounded text-white ease-in-out duration-300 cursor-pointer"
            onClick={() => {
              setMessage("");
              if (status === 200) navigate("/");
            }}
          >
            OK
          </span>
        </div>
      ) : null}

      <div
        className={`${
          message ? "opacity-20 " : "opacity-100"
        } h-screen w-screen flex flex-col gap-10 justify-center items-center bg-gray-900`}
      >
        <div className="font-bold text-4xl text-green-500 z-50">
          Your car is in safe hands
        </div>
        <div className="flex justify-center items-center gap-2 md:gap-4 nav-div fixed top-5 left-5 z-50 text-blue-400">
          <GoGear className="h-12 w-12 animate-spin-coustom" />
          <span className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider">
            Dr.Car
          </span>
        </div>
        <img src={image} alt="background" className="fixed top-0 h-screen w-screen opacity-20" />
        <form className="flex flex-col gap-5 shadow-xl shadow-gray-500 p-10 rounded font-semibold z-40 bg-gray-800">
          <input
            type={"text"}
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Username"
            className="bg-gray-200 text-black px-2 py-3 rounded cursor-text outline-none"
          />
          <input
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            className="bg-gray-200 text-black px-2 py-3 rounded cursor-text outline-none"
          />
          <input
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            className="bg-gray-200 text-black px-2 py-3 rounded cursor-text outline-none"
          />
          <button
            onClick={login}
            className="text-center px-3 py-2 bg-blue-800 tracking-wider hover:bg-blue-600 text-white rounded  ease-in-out duration-500 disabled:opacity-50 disabled:hover:bg-blue-800"
            disabled={email && password && name ? false : true}
          >
            Register
          </button>
        </form>
        <span className="font-semibold z-50 text-white">
          Already have an account{" "}
          <span
            className="text-green-500 cursor-pointer font-bold tracking-wider"
            onClick={() => navigate("/")}
          >
            Login
          </span>{" "}
          here
        </span>
      </div>
    </div>
  );
}

export default Register;
