import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import { Headerdata } from "@/data";

interface vendorData {
  _id: string;
  title: string;
  imgurl: string;
  href: string;
  description: string;
  contents: string;

  // Add other properties as needed
}

export default function AccordionComponent() {
  const [vendorData, setVendorData] = useState<vendorData[]>([]);

  const fetchVendorData = async () => {
    try {
      const apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/package/getPackage`;
      const response = await axios.get<vendorData[]>(apiUrl);
      console.log('🚀 ~ fetchVendorData ~ response:', response.data);
      setVendorData(response.data);
      console.log(Headerdata);

    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchVendorData();
  }, []);


  return (
    <div>
      {vendorData.map((item, index) => (
        <Accordion
          type="single"
          collapsible
          className="w-full px-8"
          key={index}
        >
          <AccordionItem value={`${item.title}`}>
            <AccordionTrigger>
              {item.contents.length == 0 ? (
                <a href={item.href}>{item.title}</a>
              ) : (
                <a >{item.title}</a>
              )}
            </AccordionTrigger>


            {Array.isArray(item.contents) && item.contents.length > 0 ? (
              item.contents.map((content, index) => (
                <AccordionContent key={index}>
                  <a href={`${item.href}/${content.href}`}>{content.title}</a>
                </AccordionContent>
              ))
            ) : (
              " "
            )}

          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
