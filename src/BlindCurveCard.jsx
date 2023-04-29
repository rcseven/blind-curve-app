import TrafficConditionLegend from "./TrafficConditionLegend";
import CurveRoad from "./assets/Curve-Road.png";

const BlindCurveCard = ({ children, title }) => {
  return (
    <div
      className="p-[2em] rounded-[1em]
                lg:p-[3em]
                xl:p-[4em]
                2xl:p-[5em]
            bg-primary drop-shadow-primary"
    >
      <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-center">
        {title}
      </h1>
      <div className="relative flex items-center justify-center mt-5">
        <img
          className="w-48 md:w-[14em] lg:w-[16em] xl:w-[18em] 2xl:w-[24em] h-auto "
          src={CurveRoad}
          alt="Curve Road"
        />
        <TrafficConditionLegend />
      </div>
      {children}
    </div>
  );
};

export default BlindCurveCard;
