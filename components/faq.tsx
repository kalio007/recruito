import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const accordionData = [
    {
      title: "What is an AI Agent?",
      content: (
        <div>
          <p>
            An AI agent is a software system that understands language, learns
            from data, and takes actions automatically to achieve specific
            goals. In the hiring world, an AI agent can review resumes, interact
            with candidates, and provide recommendations, all without manual
            oversight.
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Natural Language Processing to interpret resumes and candidate
              responses
            </li>
            <li>
              Adaptive Learning to improve accuracy and efficiency over time
            </li>
            <li>
              Task Automation to handle repetitive or time-consuming steps
            </li>
            <li>Data-Driven Insights for better predictions and decisions</li>
          </ul>
        </div>
      ),
    },
    {
      title: "What are the Benefits of Using Recruito’s AI Agent?",
      content: <p>Insert your content for benefits here.</p>, // Replace with actual content
    },
    {
      title: "Next Steps?",
      content: <p>Insert your content for next steps here.</p>, // Replace with actual content
    },
  ];

  return (
    <section className="py-16 bg-light">
      <div className="text-center mb-12">
        <p className="text-teal-400 text-sm font-medium">FAQs</p>
      </div>
      <div className="container mx-auto">
        <Accordion type="single" collapsible>
          {accordionData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
