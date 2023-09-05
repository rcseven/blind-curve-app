const TrafficConditionLegend = () => {
  const list_styles = "flex items-center text-[0.8em] md:text-[1.5em] xl:text-[1.5em] 2xl:text-[2em] mb-[0.8em]";
  const bullet_styles = "w-[1em] h-[1em] xl:w-[1.25em] xl:h-[1.25em] mr-[0.5em]";
  return (
    <ol className="absolute top-16 md:top-8 lg:top-0 right-0">
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
