import { TabsList, TabsTrigger } from "../components/ui/tabs";
import { Heart, Brain } from "lucide-react";

export function PhysicalMentalTabsList() {
  return (
    <TabsList className="flex bg-secondary w-96 gap-2 mb-4">
      <TabsTrigger
        value="physical"
        className="flex rounded-full items-center gap-2"
      >
        <span>Physical</span>
        <Heart className="w-4 h-4" />
      </TabsTrigger>
      <TabsTrigger
        value="mental"
        className="flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2"
      >
        <span>Mental</span>
        <Brain className="w-4 h-4" />
      </TabsTrigger>
    </TabsList>
  );
}
