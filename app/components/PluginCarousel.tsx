import { plugins } from "@/app/constants/plugins";

import DisplayCard from "./DisplayCard";

const PluginCarousel = () => {
  return (
    <div>
      <p className="text-5xl font-medium m-20 text-center text-secondary-gradient">
        Featured
      </p>

      <div className="w-full flex items-center gap-x-10 max-w-7xl">
        {plugins.map((plugin, index) => (
          <DisplayCard key={index} {...plugin} />
        ))}
      </div>
    </div>
  );
};

export default PluginCarousel;
