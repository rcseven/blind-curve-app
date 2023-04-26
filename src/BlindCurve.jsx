import TrafficStatus from "./TrafficStatus";
import CurveRoad from "./assets/curve-road.png";
const BlindCurve = () => {
  const list_styles = "flex items-center font-bold text-[0.5em] mb-[0.8em]";
  const bullet_styles = "w-[0.5em] h-[0.5em] mr-[0.5em]";
  return (
    <div
      className="p-[2em] rounded-[1em]
                lg:p-[3em]
                xl:p-[4em]
                2xl:p-[5em]
            bg-primary drop-shadow-primary"
    >
      <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-center">
        Blind Curve Traffic Condition
      </h1>

      <div className="relative flex items-center justify-center mt-5">
        <img
          className="w-48 md:w-[14em] lg:w-[16em] xl:w-[18em] 2xl:w-[24em] h-auto "
          src={CurveRoad}
          alt="Curve Road"
        />
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
        </ol>
      </div>
      <TrafficStatus trafficCondition={"bg-red"} />
    </div>
  );
};

export default BlindCurve;
