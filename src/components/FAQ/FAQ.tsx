import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQData } from "@/data";

export default function FAQ() {
  return (
    <div className="p-8">
      <h1 className="font-Proxima-Nova font-medium text-xl md:text-2xl pb-4 flex justify-center">
          Frequently Asked Questions
        </h1>
      <div className="bg-gray-100 dark:bg-[#101929] rounded-md p-2">
        
        {FAQData.map((item, index) => (
          <Accordion
            type="single"
            collapsible
            className="w-full px-8"
            key={index}
          >
            <AccordionItem value={`${item.question}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent key={index}>{item.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
