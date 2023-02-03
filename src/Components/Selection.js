import React, { useEffect, useState } from "react";
import cooling from "../Icons/icons8-cooling-96.png";
import { FaOilCan } from "react-icons/fa";
import { TbEngine } from "react-icons/tb";
import { RiCarWashingFill } from "react-icons/ri";
import { BsGearWideConnected } from "react-icons/bs";

const Selection = ({data,setData}) => {
  const [ac, setAc] = useState(false);
  const [oil, setOil] = useState(false);
  const [engine, setEngine] = useState(false);
  const [wash, setWash] = useState(false);
  const [full, setFull] = useState(false);

  useEffect(() => {
    if ((ac&&oil&&engine&&wash)||full) {
      setFull(true);
      setAc(false);
      setEngine(false);
      setOil(false);
      setWash(false);
    }
    setData({ac:ac,oil:oil,engine:engine,wash:wash,full:full})
  }, [ac, oil, engine, wash, full]);
  
  return (
    <div className="flex flex-col w-3/4 sm:w-auto sm:flex-row justify-center flex-wrap gap-4 items-center lg:content-center">
      {/* ac */}

      {ac ? (
        <div
          className="p-5 w-full sm:w-1/3 lg:py-8 flex flex-col lg:flex-row gap-1 md:gap-5 justify-center items-center text-white bg-teal-600 cursor-pointer rounded-xl hover:bg-teal-700"
          onClick={() => {
            setAc(!ac);
          }}
        >
          <img src={cooling} alt="cooling" className="h-7 w-7 cursor-pointer" />
          <span className="font-semibold text-center tracking-wide cursor-pointer">
            AC Service
          </span>
        </div>
      ) : (
        <div
          className="p-5 w-full sm:w-1/3 lg:py-8 flex flex-col lg:flex-row gap-1 md:gap-5 justify-center items-center text-white bg-blue-600 cursor-pointer rounded-xl hover:bg-blue-700 "
          onClick={() => {
            setAc(!ac);
          }}
        >
          <img src={cooling} alt="cooling" className="h-7 w-7 cursor-pointer" />
          <span className="font-semibold text-center tracking-wide cursor-pointer">
            AC Service
          </span>
        </div>
      )}

      {/* oil */}

      {oil ? (
        <div
          className="p-5 w-full sm:w-1/3 lg:py-8 flex flex-col lg:flex-row gap-1 md:gap-5 justify-center items-center text-white bg-teal-600 cursor-pointer rounded-xl hover:bg-teal-700"
          onClick={() => {
            setOil(!oil);
          }}
        >
          <FaOilCan className="h-7 w-7 cursor-pointer" />
          <span className="font-semibold text-center tracking-wide cursor-pointer">
            Oil Change
          </span>
        </div>
      ) : (
        <div
          className="p-5 w-full sm:w-1/3 lg:py-8 flex flex-col lg:flex-row gap-1 md:gap-5 justify-center items-center text-white bg-blue-600 cursor-pointer rounded-xl hover:bg-blue-700"
          onClick={() => {
            setOil(!oil);
          }}
        >
          <FaOilCan className="h-7 w-7 cursor-pointer" />
          <span className="font-semibold text-center tracking-wide cursor-pointer">
            Oil Change
          </span>
        </div>
      )}

      {/* engine */}

      {engine ? (
        <div
          className="p-5 w-full sm:w-1/3 lg:py-8 flex flex-col lg:flex-row gap-1 md:gap-5 justify-center items-center text-white bg-teal-600 cursor-pointer rounded-xl hover:bg-teal-700"
          onClick={() => {
            setEngine(!engine);
          }}
        >
          <TbEngine className="h-7 w-7 cursor-pointer" />
          <span className="font-semibold text-center tracking-wide cursor-pointer">
            Engine Service
          </span>
        </div>
      ) : (
        <div
          className="p-5 w-full sm:w-1/3 lg:py-8 flex flex-col lg:flex-row gap-1 md:gap-5 justify-center items-center text-white bg-blue-600 cursor-pointer rounded-xl hover:bg-blue-700"
          onClick={() => {
            setEngine(!engine);
          }}
        >
          <TbEngine className="h-7 w-7 cursor-pointer" />
          <span className="font-semibold text-center tracking-wide cursor-pointer">
            Engine Service
          </span>
        </div>
      )}

      {/* wash */}

      {wash ? (
        <div
          className="p-5 w-full sm:w-1/3 lg:py-8 flex flex-col lg:flex-row gap-1 md:gap-5 justify-center items-center text-white bg-teal-600 cursor-pointer rounded-xl hover:bg-teal-700"
          onClick={() => {
            setWash(!wash);
          }}
        >
          <RiCarWashingFill className="h-7 w-7 cursor-pointer" />
          <span className="font-semibold text-center tracking-wide cursor-pointer">
            Water Service
          </span>
        </div>
      ) : (
        <div
          className="p-5 w-full sm:w-1/3 lg:py-8 flex flex-col lg:flex-row gap-1 md:gap-5 justify-center items-center text-white bg-blue-600 cursor-pointer rounded-xl hover:bg-blue-700"
          onClick={() => {
            setWash(!wash);
          }}
        >
          <RiCarWashingFill className="h-7 w-7 cursor-pointer" />
          <span className="font-semibold text-center tracking-wide cursor-pointer">
            Water Service
          </span>
        </div>
      )}

      {/* full */}

      {full ? (
        <div
          className="p-5 w-full sm:w-1/3 lg:py-8 flex flex-col lg:flex-row gap-1 md:gap-5 justify-center items-center text-white bg-teal-600 cursor-pointer rounded-xl hover:bg-teal-700"
          onClick={() => {
            setFull(!full);
          }}
        >
          <BsGearWideConnected className="h-7 w-7 cursor-pointer" />
          <span className="font-semibold text-center tracking-wide cursor-pointer">
            Full Service
          </span>
        </div>
      ) : (
        <div
          className="p-5 w-full sm:w-1/3 lg:py-8 flex flex-col lg:flex-row gap-1 md:gap-5 justify-center items-center text-white bg-blue-600 cursor-pointer rounded-xl hover:bg-blue-700"
          onClick={() => {
            setFull(!full);
          }}
        >
          <BsGearWideConnected className="h-7 w-7 cursor-pointer" />
          <span className="font-semibold text-center tracking-wide cursor-pointer">
            Full Service
          </span>
        </div>
      )}
    </div>
  );
};

export default Selection;
