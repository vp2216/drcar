import React, { useState } from "react";
import Form from "./Form";
import Selection from "./Selection";

const Main = () => {

  const [data, setData] = useState({ ac: false, oil: false, engine: false, wash: false, full: false });

  return (
    <div className=" flex flex-col lg:items-center w-full lg:h-full lg:flex-row overflow-scroll">
      <div className="flex flex-col justify-center items-center gap-10 px-5 lg:w-3/5 lg:px-20 lg:mt-0 lg:h-full py-10 lg:py-0">
        <h1 className="font-bold text-2xl text-center">
          Select the services you need
        </h1>
        <Selection data={data} setData={setData} />
      </div>
      <div className="lg:w-2/5 py-10 lg:py-0 flex justify-center items-center">
        <Form service={data} />
      </div>
    </div>
  );
};

export default Main;
