import { db } from "./Firebase";
import { onValue, ref } from "firebase/database";
import TrafficStatus from "./TrafficStatus";
import { useState } from "react";
import { useEffect } from "react";
import BlindCurveCard from "./BlindCurveCard";

const BlindCurve = () => {
  const [trafficCondition, setTrafficCondition] = useState();
  const [trafficStatus, setTrafficStatus] = useState();

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
    <BlindCurveCard title={"Blind Curve Traffic Condition"}>
      <TrafficStatus trafficStatus={trafficStatus} />
    </BlindCurveCard>
  );
};

export default BlindCurve;
