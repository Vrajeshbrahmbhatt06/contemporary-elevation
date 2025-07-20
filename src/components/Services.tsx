
import { Home, Plus, Wrench, Hammer, Building } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Custom Homes",
      description: "Bespoke residential construction tailored to your unique vision and lifestyle."
    },
    {
      icon: Plus,
      title: "Additions",
      description: "Seamlessly expand your living space with thoughtfully designed additions."
    },
    {
      icon: Wrench,
      title: "Remodeling",
      description: "Transform existing spaces into modern, functional environments."
    },
    {
      icon: Hammer,
      title: "Renovation",
      description: "Restore and revitalize properties with contemporary updates."
    },
    {
      icon: Building,
      title: "Legal Duplex Conversions",
      description: "Expert conversion services that maximize property potential and value."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to completion, we deliver exceptional results across all aspects of construction and renovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-8 bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="w-12 h-12 text-gray-700 mb-6 group-hover:text-gray-900 transition-colors" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
