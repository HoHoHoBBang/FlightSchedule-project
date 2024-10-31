import Search from "./Search";
import AirlineSchedule from "./AirlineSchedule";

const Card = () => {
  return (
    <div className="flex h-dvh flex-col">
      <Search />
      <div className="h-full bg-sky-400">
        <AirlineSchedule />
      </div>
    </div>
  );
};

export default Card;
