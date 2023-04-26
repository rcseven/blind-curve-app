const TrafficStatus = ({ trafficCondition }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <h1 className="font-bold">Status:</h1>
      <div className={`${trafficCondition} w-4 h-4`}></div>
    </div>
  );
};

export default TrafficStatus;
