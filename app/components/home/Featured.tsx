import { plugins } from "@/constants/plugins";

import FeaturedCard from "./FeaturedCard";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Featured = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 3 },
  });

  return (
    <div>
      <p className="text-5xl my-20 font-semibold text-center text-secondary-gradient">
        Our Best Picks
      </p>

      <div ref={sliderRef} className="keen-slider gap-x-4">
        {plugins.map((plugin, index) => (
          <div className="keen-slider__slide" key={index}>
            <FeaturedCard {...plugin} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
