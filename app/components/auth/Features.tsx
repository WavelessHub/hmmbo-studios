import { features } from "@/app/constants/features";

const Features = () => {
  return (
    <div className="max-w-xl">
      <p className="text-4xl font-bold mb-4 text-white">
        Premium Quality
        <br />
        <span className="text-blue-200">Without The Premium Price</span>
      </p>

      <div className="grid grid-cols-2 gap-6 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-black/20 backdrop-blur-sm rounded-lg p-5 border border-primary/70/30"
          >
            <div className="flex items-center gap-x-3 mb-3">
              <div className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  {feature.icon}
                </span>
              </div>

              <p className="text-white font-semibold">{feature.title}</p>
            </div>

            <p className="text-blue-200 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
