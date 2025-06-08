import { plugins } from "@/constants/plugins";

import DisplayCard from "./DisplayCard";

const Featured = () => {
  return (
    <div>
      <p className="text-5xl m-20 font-semibold text-center text-secondary-gradient">
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

export default Featured;
