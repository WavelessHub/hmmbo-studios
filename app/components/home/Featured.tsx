import { plugins } from "@/constants/plugins";


import FeaturedCard from "./FeaturedCard";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Featured = () => {


  
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,

    },
  });

  return (
    <div className="w-[80vw]">
      <p className="text-5xl mb-10 font-semibold text-center text-secondary-gradient">
      Our Best Picks
      </p>

      <div
        ref={sliderRef}
        className="keen-slider "
        
      >
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