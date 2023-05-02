import TrafficCondition from "./TrafficCondition";
import BlindCurveCard from "./BlindCurveCard";
import useTrafficConditionReadings from "./useTrafficConditionReadings";

const BlindCurve = () => {
  const { trafficCondition } = useTrafficConditionReadings();

  return (
    <BlindCurveCard title={"Blind Curve Traffic Condition"}>
      <TrafficCondition trafficCondition={trafficCondition} />
    </BlindCurveCard>
  );
};

export default BlindCurve;
