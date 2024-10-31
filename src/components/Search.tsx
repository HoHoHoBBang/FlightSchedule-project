import { useContext } from "react";
import MultiRangeSlider from "./MultiRangeSlider";
import { airlineContext } from "../context/airlineContext";
import airplane from "../assets/airplane.png";

const Search = () => {
  const {
    lineType,
    setLineType,
    ioType,
    setIoType,
    airCode,
    setAirCode,
    setPageNumber,
    fetchFlightStatus,
  } = useContext(airlineContext);

  const lineTypeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLineType(e.target.value);
  };

  const ioTypeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIoType(e.target.value);
  };
  const airCodeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAirCode(e.target.value);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="flex h-20 w-full items-center justify-between">
        <div
          className="flex h-full w-full flex-[2] flex-col items-start justify-center bg-sky-400 pl-5"
          style={{ clipPath: `polygon(0 0, 70% 0, 100% 100%, 0% 100%)` }}
        >
          <p className="text-sm text-white sm:text-xl">
            {lineType === "D" ? "DOMESTIC" : "INTERNATIONAL"}
          </p>
          <p className="text-xl font-bold text-white sm:text-4xl">
            FLIGHT SCHEDULE<span className="text-yellow-500">.</span>
          </p>
        </div>
        <div className="flex w-full flex-1 items-center justify-center">
          <img
            src={airplane}
            alt=""
            className={`w-20 ${ioType === "O" ? "" : "rotate-[35deg]"} sm:w-36`}
          />
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-around gap-2 bg-sky-400">
        <div className="flex w-full items-center justify-around">
          <div className="flex flex-col items-center">
            <label htmlFor="" className="text-white sm:text-lg">
              항공편
            </label>
            <select
              onChange={lineTypeHandler}
              value={lineType}
              className="rounded-lg px-1 py-1 text-sm sm:px-2"
            >
              <option value="D">국내선</option>
              <option value="I">국제선</option>
            </select>
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="" className="text-white sm:text-lg">
              운행타입
            </label>
            <select
              onChange={ioTypeHandler}
              value={ioType}
              className="rounded-lg px-1 py-1 text-sm sm:px-2"
            >
              <option value="O">출발</option>
              <option value="I">도착</option>
            </select>
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="" className="text-white sm:text-lg">
              공항
            </label>
            <select
              onChange={airCodeHandler}
              value={airCode}
              className="rounded-lg px-1 py-1 text-sm sm:px-2"
            >
              <option value="ICN">인천</option>
              <option value="GMP">김포</option>
              <option value="TAE">대구</option>
              <option value="PUS">김해</option>
              <option value="CJU">제주</option>
            </select>
          </div>
          <MultiRangeSlider
            initialMin={360}
            initialMax={1080}
            min={0}
            max={1440}
            step={10}
            timeGap={60}
          />
        </div>
        <div
          className="flex w-[90%] cursor-pointer items-center justify-center rounded-full border-2 py-1 text-white"
          onClick={() => {
            fetchFlightStatus();
            setPageNumber(1);
          }}
        >
          <p>Search</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
