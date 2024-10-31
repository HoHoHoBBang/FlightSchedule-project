import { useContext } from "react";
import { airlineContext } from "../context/airlineContext";
import airplane2 from "../assets/airplane2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const AirlineSchedule = () => {
  const { airlineData, ioType, pageNumber, setPageNumber } =
    useContext(airlineContext);

  return (
    <div className="relative flex h-full flex-col gap-2 overflow-hidden bg-sky-400 px-2 pb-5 sm:px-5">
      <div className="z-10 flex h-14 items-center justify-around text-lg text-white">
        <div className="flex w-full flex-col items-center justify-center">
          <p className="text-sm sm:text-base">항공사</p>
          <p className="text-xs">Airline</p>
        </div>
        {ioType === "O" ? (
          <div className="flex w-full flex-col items-center justify-center">
            <p className="text-sm sm:text-base">도착지</p>
            <p className="text-xs">To</p>
          </div>
        ) : (
          <div className="flex w-full flex-col items-center justify-center">
            <p className="text-sm sm:text-base">출발지</p>
            <p className="text-xs">From</p>
          </div>
        )}
        {ioType === "O" ? (
          <div className="flex w-full flex-col items-center justify-center">
            <p className="text-sm sm:text-base">출발시간</p>
            <p className="text-xs">Std</p>
          </div>
        ) : (
          <div className="flex w-full flex-col items-center justify-center">
            <p className="text-sm sm:text-base">도착시간</p>
            <p className="text-xs">Sta</p>
          </div>
        )}
        {ioType === "O" ? (
          <div className="flex w-full flex-col items-center justify-center">
            <p className="text-sm sm:text-base">변경시간</p>
            <p className="text-xs">Etd</p>
          </div>
        ) : (
          <div className="flex w-full flex-col items-center justify-center">
            <p className="text-sm sm:text-base">변경시간</p>
            <p className="text-xs">Eta</p>
          </div>
        )}
        <div className="flex w-full flex-col items-center justify-center">
          <p className="text-sm sm:text-base">비고</p>
          <p className="text-xs">Remark</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <p className="text-sm sm:text-base">게이트</p>
          <p className="text-xs">Gate</p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-1.5">
        {airlineData &&
          airlineData.map((data, index) => (
            <div
              key={index}
              className="z-10 flex h-10 justify-around rounded-full bg-white sm:h-14"
            >
              <div className="flex w-full flex-col items-center justify-center gap-0.5">
                <p className="hidden text-xs sm:block sm:text-base">
                  {data.airLine?.replace(" ", "")}
                </p>
                <p className="text-xs sm:text-base">{data.flightNum}</p>
              </div>
              <p className="flex w-full items-center justify-start overflow-hidden text-nowrap text-xs sm:justify-center sm:text-base">
                {data.from}
              </p>
              <p className="flex w-full items-center justify-center text-xs sm:text-base">
                {data.std.slice(0, 2)}:{data.std.slice(2, 4)}
              </p>
              <p className="flex w-full items-center justify-center text-xs sm:text-base">
                {data.etd.slice(0, 2)}:{data.etd.slice(2, 4)}
              </p>
              <p className="flex w-full items-center justify-center text-xs sm:text-base">
                {data.remark}
              </p>
              <p className="flex w-full items-center justify-center text-xs sm:text-base">
                {data.gateNo}
              </p>
            </div>
          ))}
        {airlineData && (
          <div className="z-10 flex items-center justify-center gap-5">
            <div
              onClick={() =>
                setPageNumber(pageNumber !== 1 ? pageNumber - 1 : pageNumber)
              }
              className="cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faPlay}
                className="rotate-180 text-white"
              />
            </div>
            <p className="text-white">{pageNumber}</p>
            <div
              onClick={() => setPageNumber(pageNumber + 1)}
              className="cursor-pointer"
            >
              <FontAwesomeIcon icon={faPlay} className="text-white" />
            </div>
          </div>
        )}
      </div>
      <div className="absolute z-0 flex flex-col items-center justify-center opacity-5">
        <img src={airplane2} alt="" className="w-full bg-sky-400" />
        <img src={airplane2} alt="" className="w-full rotate-180 bg-sky-400" />
      </div>
    </div>
  );
};

export default AirlineSchedule;
