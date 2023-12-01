import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Headerdata } from "@/data";

export default function AccordionComponent() {
  return (
    <div>
      {Headerdata.map((item, index) => (
        <Accordion
          type="single"
          collapsible
          className="w-full px-8"
          key={index}
        >
          <AccordionItem value={`${item.title}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            {item.contents.map((content, index) => (
              <AccordionContent key={index}>
                <a href={`${item.href}/${content.href}`}>{content.title}</a>
              </AccordionContent>
            ))}
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
