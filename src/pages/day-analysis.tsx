import { useState } from "react";
import { DatePicker } from "../components/ui/datepicker";
import { AppLayout } from "../layout/AppLayout";
import { Tabs, TabsContent } from "../components/ui/tabs";
import { PhysicalMentalTabsList } from "../components/PhysicalMentalTabsList";
import { LabelList, RadialBar, RadialBarChart } from "recharts";
import { physicalChartConfig, mentalChartConfig } from "../types";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "../components/ui/chart";
import { calculateAverage } from "../components/utils";
import { useQuery, getDayAnalysis } from "wasp/client/operations";

function PhysicalAnalysis({
  meals,
  physicalActivity,
  hydration,
  advices,
}: {
  meals: number;
  physicalActivity: number;
  hydration: number;
  advices: string[];
}) {
  const physicalChartData = [
    {
      measureIndicator: "hydration",
      value: hydration,
      fill: "var(--color-hydration)",
    },
    {
      measureIndicator: "physicalActivity",
      value: physicalActivity,
      fill: "var(--color-physicalActivity)",
    },
    { measureIndicator: "meals", value: meals, fill: "var(--color-meals)" },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div className="h-72">
        <ChartContainer
          config={physicalChartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={physicalChartData}
            startAngle={-90}
            endAngle={200}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent hideLabel nameKey="measureIndicator" />
              }
            />
            <RadialBar dataKey="value" background>
              <LabelList
                position="insideStart"
                dataKey="browser"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
            <ChartLegend
              content={<ChartLegendContent nameKey="measureIndicator" />}
              className="translate-y-4 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </RadialBarChart>
        </ChartContainer>
      </div>
      <p className="text-lg">
        Great job, your day is{" "}
        {calculateAverage([meals, physicalActivity, hydration])}/10. Here is
        some advice on how to make your life better:
      </p>
      <ul className="list-disc list-inside text-xl">
        {advices.map((advice) => (
          <li key={advice}>{advice}</li>
        ))}
      </ul>
    </div>
  );
}
function MentalAnalysis({
  mindfulness,
  mood,
  stress,
  advices,
}: {
  mindfulness: number;
  mood: number;
  stress: number;
  advices: string[];
}) {
  const mentalChartData = [
    { measureIndicator: "stress", value: stress, fill: "var(--color-stress)" },
    {
      measureIndicator: "mood",
      value: mood,
      fill: "var(--color-mood)",
    },
    {
      measureIndicator: "mindfulness",
      value: mindfulness,
      fill: "var(--color-mindfulness)",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      <div className="h-72">
        <ChartContainer
          config={mentalChartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={mentalChartData}
            startAngle={-90}
            endAngle={200}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent hideLabel nameKey="measureIndicator" />
              }
            />
            <RadialBar dataKey="value" background>
              <LabelList
                position="insideStart"
                dataKey="browser"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
            <ChartLegend
              content={<ChartLegendContent nameKey="measureIndicator" />}
              className="translate-y-4 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </RadialBarChart>
        </ChartContainer>
      </div>
      <p className="text-lg">
        Great job, your day is {calculateAverage([mindfulness, mood, stress])}
        /10. Here is some advice on how to make your life better:
      </p>
      <ul className="list-disc list-inside text-xl">
        {advices.map((advice) => (
          <li key={advice}>{advice}</li>
        ))}
      </ul>
    </div>
  );
}

export function DayAnalysis() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const analysis = useQuery(getDayAnalysis, { date: date || new Date() });

  if (!analysis.data) {
    return <AppLayout>Loading...</AppLayout>;
  }

  return (
    <AppLayout>
      <div className="flex flex-col pt-4 self-center gap-3">
        <h2 className="font-bold text-xl">Day analysis</h2>
        <DatePicker date={date || new Date()} setDate={setDate} />
        <Tabs defaultValue="physical">
          <PhysicalMentalTabsList />
          <TabsContent value="physical" className="w-96">
            <PhysicalAnalysis {...analysis.data.physical} />
          </TabsContent>
          <TabsContent value="mental" className="w-96">
            <MentalAnalysis {...analysis.data.mental} />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
