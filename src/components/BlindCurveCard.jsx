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
                h-[90vh]
                w-[80%]
                "
    >
      <h1 className="text-base md:text-lg lg:text-2xl xl:text-4xl font-bold text-center">
        {title}
      </h1>
      <div className="relative flex items-center justify-start mt-[8em]">
        <img
          className="w-48 md:w-[14em] lg:w-[16em] xl:w-[30em] h-auto "
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
