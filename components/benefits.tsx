import { Cloud, Wand2, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Hero_background from "@/assets/Gabrun-Hero-BG-5.png";
import Hero_background2 from "@/assets/Gabrun-Hero-BG-52.png";
import Image from "next/image";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Wand2 className="w-8 h-8 text-teal-400" />,
      title: "Automate Processes",
      description:
        "Let Recruito handle resume screening, scheduling, and interviews so you can focus on strategic decisions.",
    },
    {
      icon: <Cloud className="w-8 h-8 text-teal-400" />,
      title: "Provide Instant Information",
      description:
        "Quickly access relevant candidate data, ensuring no talent is overlooked in your search.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-teal-400" />,
      title: "Make Data-Driven Decisions",
      description:
        "Utilize analytics to rank candidates based on key metrics, providing unbiased recommendations for your hiring team.",
    },
  ];

  return (
    <section className="relative bg-slate-900 py-16">
      <div className="absolute bottom-o left-0">
        <Image src={Hero_background} alt="image" width={500} height={200} />
      </div>
      <div className="absolute bottom-o right-0">
        <Image src={Hero_background2} alt="image" width={500} height={200} />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block text-teal-400 text-sm font-medium px-6 py-1.5 rounded-full border border-gray-600 mb-8">
            Benefits
          </div>

          <h2 className="text-white text-4xl font-bold">
            Unlock the advantages of using
            <br />
            Recruito AI for your hiring needs.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700">
              <CardHeader className="flex flex-col items-center">
                <div className="bg-slate-800 rounded-lg w-12 h-12 flex items-center justify-center">
                  {benefit.icon}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <h3 className="text-white text-xl font-semibold mb-4 flex flex-col">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 text-center">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
