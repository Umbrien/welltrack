import { useState } from "react";
import { AppLayout } from "../layout/AppLayout";
import { Tabs, TabsContent } from "../components/ui/tabs";
import { Mental } from "../components/describe-day/mental";
import { Physical } from "../components/describe-day/physical";
import { PhysicalMentalTabsList } from "../components/PhysicalMentalTabsList";
import { analyzeDayActivities } from "wasp/client/operations";

export function DescribeDay() {
  const [ate, setAte] = useState("");
  const [physicalActivity, setPhysicalActivity] = useState("");
  const [hydration, setHydration] = useState(2);

  const [mindfulness, setMindfulness] = useState("");
  const [mood, setMood] = useState(1);
  const [stress, setStress] = useState(1);
  const [feeling, setFeeling] = useState("");

  async function submit() {
    await analyzeDayActivities({
      physical: {
        ate,
        physicalActivity,
        hydration,
      },
      mental: {
        mindfulness,
        mood,
        stress,
        feeling,
      },
    });
  }
  return (
    <AppLayout>
      <div className="max-w-lg mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">How is it going?</h1>
        <Tabs defaultValue="physical">
          <PhysicalMentalTabsList />
          <TabsContent value="physical" className="w-96">
            <Physical
              {...{
                ate,
                setAte,
                physicalActivity,
                setPhysicalActivity,
                hydration,
                setHydration,
              }}
            />
          </TabsContent>
          <TabsContent value="mental" className="w-96">
            <Mental
              {...{
                mindfulness,
                setMindfulness,
                mood,
                setMood,
                stress,
                setStress,
                feeling,
                setFeeling,
                submit,
              }}
            />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
