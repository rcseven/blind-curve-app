const TrafficCondition = ({ trafficCondition }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <h1 className="font-bold">Status:</h1>
      <div
        className={`${trafficCondition.style} w-4 h-4`}
        alt={trafficCondition.conditon}
        title={trafficCondition.condition}
      ></div>
    </div>
  );
};

export default TrafficCondition;
