import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import labDelhi from "/lab-delhi.png";
export default function Labs() {
  return (
    <div className="py-16 px-8 flex flex-col items-center gap-8">
      <p className="font-Proxima-Nova font-medium text-2xl md:text-3xl border-b-4 border-indigo-500">
        Have a look at our Labs
      </p>
      <div className="flex flex-wrap sm:w-screen md:w-full justify-center md:gap-4">
        {
          <>
            <Card className="p-2">
              <CardContent className="flex flex-col">
                <img src={labDelhi}></img>
                <div className="flex flex-row justify-between">
                  <p>Delhi</p>
                  <Button variant={"link"}>{"View Details"}</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-2">
              <CardContent className="flex flex-col">
                <img src={labDelhi}></img>
                <div className="flex flex-row justify-between">
                  <p>Delhi</p>
                  <Button variant={"link"}>{"View Details"}</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-2">
              <CardContent className="flex flex-col">
                <img src={labDelhi}></img>
                <div className="flex flex-row justify-between">
                  <p>Delhi</p>
                  <Button variant={"link"}>{"View Details"}</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-2">
              <CardContent className="flex flex-col">
                <img src={labDelhi}></img>
                <div className="flex flex-row justify-between">
                  <p>Delhi</p>
                  <Button variant={"link"}>{"View Details"}</Button>
                </div>
              </CardContent>
            </Card>
          </>
        }
      </div>
      <Button variant={"secondary"}>View All</Button>
    </div>
  );
}
