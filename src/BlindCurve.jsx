import { db } from "./Firebase";
import { onValue, ref } from "firebase/database";
import TrafficCondition from "./TrafficCondition";
import { useState } from "react";
import { useEffect } from "react";
import BlindCurveCard from "./BlindCurveCard";

const BlindCurve = () => {
  const [trafficCondition, setTrafficCondition] = useState({
    style: "bg-gray",
    condition: "No Data",
  });

  useEffect(() => {
    const trafficConditionRef = ref(db, "trafficCondition");
    onValue(trafficConditionRef, (snapshot) => {
      const data = snapshot.val();

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
          setTrafficCondition({ style: "bg-green", condition: "Low Traffic" });
          break;
        default:
          setTrafficCondition({ style: "bg-gray", condition: "No Data" });
      }
    });
  }, []);

  return (
    <BlindCurveCard title={"Blind Curve Traffic Condition"}>
      <TrafficCondition trafficCondition={trafficCondition} />
    </BlindCurveCard>
  );
};

export default BlindCurve;
