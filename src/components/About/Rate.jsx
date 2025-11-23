import React from "react";

const Rate = () => {
  const rates = [
    {
      name: "25+",
      image: "/src/assets/images/rate.png",
      description: "Certified Technicians",
    },
    {
      name: "98%",
      image: "/src/assets/images/rate1.png",
      description: "Satisfaction Rate",
    },
    {
      name: "4.7",
      image: "/src/assets/images/rate2.png",
      description: "Overall Customer Rating by google ",
    },
    {
      name: "10+",
      image: "/src/assets/images/rate4.png",
      description: "Years of Experiences",
    },
  ];
  return (
    <div className="py-6 bg-[#F9F9F9]">
      <div className="grid grid-cols-4 items-center px-[10%]">
        {rates.map((rate, idx) => (
          <div key={idx}>
            <div
              className={`flex flex-col items-center justify-center border-dashed ${
                idx === rates.length - 1
                  ? "" 
                  : "border-r-2 border-[#B7BCC6]" 
              }`}
            >
              <img
                className="h-12 w-12 p-3 bg-[#E639461A] rounded-lg"
                src={rate.image}
                alt=""
              />
              <h2 className="text-5xl font-bold text-[#0D0D0D] mt-8">
                {rate.name}
              </h2>
              <p className="text-base text-[#292929]">{rate.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rate;
