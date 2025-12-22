import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceData = [
    {
      name: "Development",
      description:
        "Building robust, scalable, and high-performance applications using modern technologies.",
    },
    {
      name: "Web and Mobile App",
      description:
        "Designing interfaces that are project adaptive to create designs focused, efficient, and that billions of people use.",
    },
    {
      name: "Design & Creative",
      description:
        "Crafting visual identities and creative assets that resonate with your target audience.",
    },
    {
      name: "UI and UX",
      description:
        "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    },
  ];

  return (
    <div className="pt-20 pb-20 bg-[#120718]">
      <h1
        data-aos="fade-up"
        className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-24"
      >
        <span className="bg-linear-to-r from-[#7849d5] to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(120,73,213,0.3)]">
          My Quality Services
        </span>
      </h1>

      <div className="w-[90%] max-w-6xl mx-auto flex flex-col border-t border-gray-800">
        {serviceData.map((service, index) => (
          <div
            key={index}
            // Each service will wait 100ms longer than the previous one
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-anchor-placement="top-bottom"
          >
            <ServiceCard
              icon=""
              name={service.name}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
