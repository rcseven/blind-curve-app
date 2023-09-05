const TrafficConditionLegend = () => {
  const list_styles = "flex items-center text-[0.6em] lg:text-[0.8em] xl:text-[2em] mb-[0.8em]";
  const bullet_styles = "w-[0.5em] h-[0.5em] xl:w-[1em] xl:h-[1em] mr-[0.5em]";
  return (
    <ol className="absolute top-0 right-0">
      <li className={list_styles}>
        <span className={`bg-red ${bullet_styles}`}></span>Heavy Traffic
      </li>
      <li className={list_styles}>
        <span className={`bg-yellow ${bullet_styles}`}></span>Light Traffic
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
