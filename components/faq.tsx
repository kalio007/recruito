import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const BackgroundPattern = () => (
  <div className="absolute inset-0 w-full h-full">
    <div className="absolute inset-0 bg-dot-black/[0.1]  bg-[size:32px_32px]" />
    <div className="absolute pointer-events-none inset-0 bg-gradient-to-b from-slate-100 via-transparent to-slate-100" />
  </div>
);

export default function FAQSection() {
  const accordionData = [
    {
      title: "What is an AI Agent?",
      content: (
        <div className="space-y-4 text-gray-600">
          <p>
            An AI agent is a software system that understands language, learns
            from data, and takes actions automatically to achieve specific
            goals. In the hiring world, an AI agent can review resumes, interact
            with candidates, and provide recommendations, all without manual
            oversight. Key capabilities include:
          </p>
          <ul className="space-y-2 list-none">
            {[
              "Natural Language Processing to interpret resumes and candidate responses",
              "Adaptive Learning to improve accuracy and efficiency over time",
              "Task Automation to handle repetitive or time-consuming steps",
              "Data-Driven Insights for better predictions and decisions",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-gray-400">-</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "What are the Benefits of Using Recruito's AI Agent?",
      content: (
        <p className="text-gray-600">Insert your content for benefits here.</p>
      ),
    },
    {
      title: "Next Steps?",
      content: (
        <p className="text-gray-600">
          Insert your content for next steps here.
        </p>
      ),
    },
  ];

  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      <BackgroundPattern />

      <div className="relative container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-sm font-medium text-blue-500 mb-8">
            FAQs
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <Accordion type="single" collapsible className="divide-y">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="px-6 py-0 first:pt-2 last:pb-2"
              >
                <AccordionTrigger className="py-4 text-lg font-medium hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
