import { db } from "./Firebase";
import { onValue, ref } from "firebase/database";
import TrafficStatus from "./TrafficStatus";
import CurveRoad from "./assets/curve-road.png";
import { useState } from "react";
import { useEffect } from "react";

const BlindCurve = () => {
  const [trafficCondition, setTrafficCondition] = useState();
  const [trafficStatus, setTrafficStatus] = useState();
  const list_styles = "flex items-center font-bold text-[0.5em] mb-[0.8em]";
  const bullet_styles = "w-[0.5em] h-[0.5em] mr-[0.5em]";

  useEffect(() => {
    const trafficConditionRef = ref(db, "trafficCondition");
    onValue(trafficConditionRef, (snapshot) => {
      const data = snapshot.val();
      setTrafficCondition(data);

      switch (data) {
        case 2:
          setTrafficStatus("bg-red");
          break;
        case 1:
          setTrafficStatus("bg-yellow");
          break;
        case 0:
          setTrafficStatus("bg-green");
          break;
        default:
          setTrafficStatus("bg-gray");
      }
    });
  }, []);

  return (
    <div
      className="p-[2em] rounded-[1em]
                lg:p-[3em]
                xl:p-[4em]
                2xl:p-[5em]
            bg-primary drop-shadow-primary"
    >
      <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-center">
        Blind Curve Traffic Condition
      </h1>

      <div className="relative flex items-center justify-center mt-5">
        <img
          className="w-48 md:w-[14em] lg:w-[16em] xl:w-[18em] 2xl:w-[24em] h-auto "
          src={CurveRoad}
          alt="Curve Road"
        />
        <ol className="absolute top-0 right-0">
          <li className={list_styles}>
            <span className={`bg-red ${bullet_styles}`}></span>High Traffic
          </li>
          <li className={list_styles}>
            <span className={`bg-yellow ${bullet_styles}`}></span>Low Traffic
          </li>
          <li className={list_styles}>
            <span className={`bg-green ${bullet_styles}`}></span>No Traffic
          </li>
          <li className={list_styles}>
            <span className={`bg-gray ${bullet_styles}`}></span>No Data
          </li>
        </ol>
      </div>
      <TrafficStatus trafficStatus={trafficStatus} />
    </div>
  );
};

export default BlindCurve;
