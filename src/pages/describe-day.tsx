import { AppLayout } from "../layout/AppLayout";
import { Tabs, TabsContent } from "../components/ui/tabs";
import { Mental } from "../components/describe-day/mental";
import { Physical } from "../components/describe-day/physical";
import { PhysicalMentalTabsList } from "../components/PhysicalMentalTabsList";

export function DescribeDay() {
  return (
    <AppLayout>
      <div className="max-w-lg mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">How is it going?</h1>
        <Tabs defaultValue="physical">
          <PhysicalMentalTabsList />
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
