import { useState, useEffect, useRef, useContext } from "react";
import { airlineContext } from "../context/airlineContext";

interface Props {
  initialMin: number;
  initialMax: number;
  min: number;
  max: number;
  step: number;
  timeGap: number;
}

const MultiRangeSlider = ({
  initialMin,
  initialMax,
  min,
  max,
  step,
  timeGap,
}: Props) => {
  const { setStTime, setEdTime } = useContext(airlineContext);

  const progressRef = useRef<HTMLDivElement | null>(null);
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);

  useEffect(() => {
    setStTime(formatValue(minValue));
  }, [minValue]);

  useEffect(() => {
    setEdTime(formatValue(maxValue));
  }, [maxValue]);

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    if (maxValue - value >= timeGap && maxValue <= max) {
      if (value > maxValue) {
        setMinValue(minValue);
      } else {
        setMinValue(value);
      }
    } else {
      if (value < minValue) {
        setMinValue(value);
      }
    }
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    if (value - minValue >= timeGap && value <= max) {
      if (value < minValue) {
        setMaxValue(maxValue);
      } else {
        setMaxValue(value);
      }
    } else {
      if (value > maxValue) {
        setMaxValue(value);
      }
    }
  };

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.left = `${(minValue / max) * 100}%`;
      progressRef.current.style.right = `${100 - (maxValue / max) * 100}%`;
    }
  }, [minValue, maxValue, max, step]);

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
  };

  const formatValue = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, "0")}${mins.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-white">
          <p>{formatTime(minValue)}</p>
          <p className="text-lg">-</p>
          <p>{formatTime(maxValue)}</p>
        </div>
      </div>

      <div>
        <div className="slider relative h-1 rounded-md bg-white">
          <div
            className="progress absolute h-1 rounded bg-sky-600"
            ref={progressRef}
          ></div>
        </div>

        <div className="range-input relative">
          <input
            onChange={handleMin}
            type="range"
            min={min}
            step={step}
            max={max}
            value={minValue}
            className="range-min pointer-events-none absolute -top-1 h-1 w-full appearance-none bg-transparent"
          />

          <input
            onChange={handleMax}
            type="range"
            min={min}
            step={step}
            max={max}
            value={maxValue}
            className="range-max pointer-events-none absolute -top-1 h-1 w-full appearance-none bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
