import { db } from "./Firebase";
import { onValue, ref } from "firebase/database";
import TrafficCondition from "./TrafficCondition";
import { useState } from "react";
import { useEffect } from "react";
import BlindCurveCard from "./BlindCurveCard";

const BlindCurve = () => {
  const [trafficCondition, setTrafficCondition] = useState(null);

  useEffect(() => {
    const trafficConditionRef = ref(db, "trafficCondition");
    onValue(trafficConditionRef, (snapshot) => {
      const data = snapshot.val();

      switch (data) {
        case 2:
          setTrafficCondition("bg-red");
          break;
        case 1:
          setTrafficCondition("bg-yellow");
          break;
        case 0:
          setTrafficCondition("bg-green");
          break;
        default:
          setTrafficCondition("bg-gray");
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
