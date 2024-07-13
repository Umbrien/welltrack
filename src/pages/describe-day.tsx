import { AppLayout } from "../layout/AppLayout";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";
import { Heart, Brain } from "lucide-react";
import { Mental } from "../components/describe-day/mental";
import { Physical } from "../components/describe-day/physical";

export function DescribeDay() {
  return (
    <AppLayout>
      <div className="max-w-lg mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">How is it going?</h1>
        <Tabs defaultValue="physical">
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
          <TabsContent value="physical" className="w-96">
            <Physical />
          </TabsContent>
          <TabsContent value="mental" className="w-96">
            <Mental />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
