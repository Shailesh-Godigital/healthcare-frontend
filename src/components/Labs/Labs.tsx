import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { LabsData } from "@/data";

export default function Labs() {
  return (
    <div className="py-16 px-8 flex flex-col items-center gap-8">
      <p className="font-Proxima-Nova font-medium text-2xl md:text-3xl border-b-4 border-blue-600">
        Have a look at our Labs
      </p>
      <div className="flex flex-wrap sm:w-screen md:w-full justify-center md:gap-4">
        {LabsData.map((item, i) => {
          return (
            <Card className="p-2" key={i}>
              <CardContent className="flex flex-col">
                <img src={item.imgSrc} className="w-[500px] h=[300px]"></img>
                <div className="flex flex-row justify-between">
                  <p>{item.name}</p>
                  <a href={`/labs${item.link}`}>
                    <Button variant={"link"}>{"View Details"}</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <a href={"/labs"}>
        <Button variant={"secondary"}>View All</Button>
      </a>
    </div>
  );
}
