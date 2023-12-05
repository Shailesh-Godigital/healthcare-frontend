import { Card, CardContent } from "@/components/ui/card";

export default function Cards() {
  return (
    <div className="flex flex-col h-screen items-center py-4">
      <h1 className="font-Proxima-Nova font-medium text-2xl md:text-3xl">
        What can we help you with today?
      </h1>
      <div>
        <Card className="w-[300px] h-[300px]">
          <CardContent>
            <h1>Hellor tehre</h1>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
