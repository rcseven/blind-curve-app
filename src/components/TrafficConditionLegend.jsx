const TrafficConditionLegend = () => {
  const list_styles = "flex items-center font-bold text-[0.5em] mb-[0.8em]";
  const bullet_styles = "w-[0.5em] h-[0.5em] mr-[0.5em]";
  return (
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
  );
};

export default TrafficConditionLegend;
