import React, {
  createContext,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface Props {
  children: React.ReactNode;
}

interface airlineDataType {
  flightNum: string;
  airLine: string;
  from: string;
  etd: string;
  std: string;
  remark: string;
  gateNo: string;
}

interface initialStateType {
  airlineData: airlineDataType[] | null;
  setAirlineData: React.Dispatch<SetStateAction<airlineDataType[] | null>>;
  lineType: string;
  setLineType: React.Dispatch<SetStateAction<string>>;
  ioType: string;
  setIoType: React.Dispatch<SetStateAction<string>>;
  airCode: string;
  setAirCode: React.Dispatch<SetStateAction<string>>;
  stTime: string;
  setStTime: React.Dispatch<SetStateAction<string>>;
  edTime: string;
  setEdTime: React.Dispatch<SetStateAction<string>>;
  pageNumber: number;
  setPageNumber: React.Dispatch<SetStateAction<number>>;
  fetchFlightStatus: () => void;
}

const initialState: initialStateType = {
  airlineData: null,
  setAirlineData: () => {},
  lineType: "D",
  setLineType: () => {},
  ioType: "I",
  setIoType: () => {},
  airCode: "GMP",
  setAirCode: () => {},
  stTime: "0600",
  setStTime: () => {},
  edTime: "1800",
  setEdTime: () => {},
  pageNumber: 1,
  setPageNumber: () => {},
  fetchFlightStatus: () => {},
};

interface fetchDataTypes {
  airlineKorean: string;
  airport: string;
  arrivedEng: string;
  arrivedKor: string;
  boardingEng: string;
  boardingKor: string;
  city: string;
  etd: string;
  gate: string;
  io: string;
  line: string;
  rmkEng: string;
  rmkKor: string;
  std: string;
  numOfRows: string;
  pageNo: string;
  totalCount: string;
  airFln: string;
  airlineEnglish: string;
}

interface fetchDataTypes2 {
  resultCode: string;
  resultMsg: string;
  typeOfFlight: string;
  airline: string;
  flightId: string;
  scheduleDateTime: string;
  estimatedDateTime: string;
  airport: string;
  gatenumber: string;
  carousel: string;
  cityCode: string;
  exitnumber: string;
  remark: string;
  airportCode: string;
  terminalId: string;
  elapsetime: string;
  firstopover: string;
  firstopovername: string;
  secstopover: string;
  secstopovername: string;
  thistopover: string;
  thistopovername: string;
  codeshare: string;
  masterflightid: string;
}

export const airlineContext = createContext<initialStateType>(initialState);

export const AirlineContextProvider = ({ children }: Props) => {
  const [airlineData, setAirlineData] = useState<airlineDataType[] | null>(
    null,
  );
  const [lineType, setLineType] = useState("D");
  const [ioType, setIoType] = useState("I");
  const [airCode, setAirCode] = useState("ICN");
  const [stTime, setStTime] = useState("0000");
  const [edTime, setEdTime] = useState("2400");
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setAirlineData(null);
  }, [lineType, ioType, airCode]);

  useEffect(() => {
    if (airlineData) {
      fetchFlightStatus();
    }
  }, [pageNumber]);

  useEffect(() => {
    if (!airlineData || airlineData.length === 0) {
      setPageNumber(1);
    }
  }, [airlineData]);

  const fetchFlightStatus = async () => {
    if (airCode !== "ICN") {
      try {
        const response = await fetch(
          `https://port-0-expressserver-m2y79lwnb9061505.sel4.cloudtype.app/api/flight-status?schStTime=${stTime}&schEdTime=${edTime}&schLineType=${lineType}&schIOType=${ioType}&schAirCode=${airCode}&pageNo=${pageNumber}`,
        );
        const data = await response.json();
        const fetchData = data.response.body.items.item;
        const correctData = fetchData.map((data: fetchDataTypes) => ({
          flightNum: data.airFln,
          airLine: data.airlineKorean,
          from: ioType === "I" ? data.boardingKor : data.arrivedKor,
          etd: data.etd.toString(),
          std: data.std.toString(),
          remark: data.rmkKor,
          gateNo: data.gate,
        }));
        setAirlineData(correctData);
      } catch (error) {
        setPageNumber(1);
        console.error("Error fetching flight status:", error);
      }
    } else if (airCode === "ICN") {
      try {
        const response = await fetch(
          `https://port-0-expressserver-m2y79lwnb9061505.sel4.cloudtype.app/api/flight-status?schStTime=${stTime}&schEdTime=${edTime}&schAirCode=${airCode}&schIOType=${ioType}`,
        );
        const data = await response.json();
        const filteredData = data.response.body.items.filter(
          (data: fetchDataTypes2) => data.typeOfFlight === lineType,
        );
        const fetchData = filteredData.slice(
          pageNumber * 10 - 1,
          pageNumber * 10 - 1 + 10,
        );

        const correctData = fetchData.map((data: fetchDataTypes2) => ({
          flightNum: data.flightId,
          airLine: data.airline,
          from: data.airport,
          etd: data.estimatedDateTime,
          std: data.scheduleDateTime,
          remark: data.remark,
          gateNo: data.gatenumber,
        }));

        setAirlineData(correctData);
      } catch (error) {
        console.error("Error fetching flight status:", error);
      }
    }
  };

  const value = {
    airlineData,
    setAirlineData,
    lineType,
    setLineType,
    ioType,
    setIoType,
    airCode,
    setAirCode,
    stTime,
    setStTime,
    edTime,
    setEdTime,
    pageNumber,
    setPageNumber,
    fetchFlightStatus,
  };
  return (
    <airlineContext.Provider value={value}>{children}</airlineContext.Provider>
  );
};
