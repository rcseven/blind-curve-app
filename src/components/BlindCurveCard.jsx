import TrafficConditionLegend from "./TrafficConditionLegend";
import CurveRoad from "../assets/Curve-Road.png";

const BlindCurveCard = ({ children, title }) => {
  return (
    <div
      className="p-[2em]
                lg:p-[3.5em]
                xl:p-[4em]
                2xl:p-[5em]
                rounded-[1.5em]
              bg-primary drop-shadow-primary
                xl:w-[50%]
                w-[90%]
                "
    >
      <h1 className="text-xl lg:text-2xl xl:text-4xl font-bold text-center">
        {title}
      </h1>
      <div className="relative flex items-center justify-start md:mt-[2em] 2xl:mt-[3em]">
        <img
          className="w-[25em] 2xl:w-[30em] h-auto mt-[10em] md:mt-[5em]"
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
