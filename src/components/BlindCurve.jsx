import TrafficCondition from "./TrafficCondition";
import BlindCurveCard from "./BlindCurveCard";
import useReadings from "../hooks/useReadings";

const BlindCurve = () => {
  const { data, error } = useReadings("Sensor/trafficCondition");

  return (
    <BlindCurveCard title={"Blind Curve Traffic Condition"}>
      <TrafficCondition data={data} />
    </BlindCurveCard>
  );
};

export default BlindCurve;
