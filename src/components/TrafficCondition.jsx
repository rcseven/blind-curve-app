import { useEffect, useState } from "react";

const TrafficCondition = ({ data }) => {
  const [trafficCondition, setTrafficCondition] = useState({
    style: "bg-gray",
    condition: "No Data",
  });

  useEffect(() => {
    switch (data) {
      case 2:
        setTrafficCondition({ style: "bg-red", condition: "High Traffic" });
        break;
      case 1:
        setTrafficCondition({
          style: "bg-yellow",
          condition: "Medium Traffic",
        });
        break;
      case 0:
        setTrafficCondition({
          style: "bg-green",
          condition: "Low Traffic",
        });
        break;
      default:
        setTrafficCondition({ style: "bg-gray", condition: "No Data" });
        break;
    }
  }, [data]);

  return (
    <div className="flex items-center justify-center gap-2">
      <h1 className="text-[1em] md:text-[1.5em] 2xl:text-[2em]">Status:</h1>
      <div
        className={`${trafficCondition.style} w-4 h-4 lg:w-8 lg:h-8 `}
        alt={trafficCondition.conditon}
        title={trafficCondition.condition}
      ></div>
    </div>
  );
};

export default TrafficCondition;
