import { useState, useMemo } from "react";
import { DatePicker } from "../components/ui/datepicker";
import { AppLayout } from "../layout/AppLayout";
import { Tabs, TabsContent } from "../components/ui/tabs";
import { PhysicalMentalTabsList } from "../components/PhysicalMentalTabsList";
import { LabelList, RadialBar, RadialBarChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "../components/ui/chart";
const physicalChartData = [
  { measureIndicator: "hydration", value: 3, fill: "var(--color-hydration)" },
  {
    measureIndicator: "physicalActivity",
    value: 6,
    fill: "var(--color-physicalActivity)",
  },
  { measureIndicator: "meals", value: 8, fill: "var(--color-meals)" },
];
const mentalChartData = [
  { measureIndicator: "stress", value: 4, fill: "var(--color-stress)" },
  {
    measureIndicator: "mood",
    value: 5,
    fill: "var(--color-mood)",
  },
  {
    measureIndicator: "mindfulness",
    value: 7,
    fill: "var(--color-mindfulness)",
  },
];

const physicalChartConfig = {
  value: {
    label: "Value",
  },
  hydration: {
    label: "Hydration",
    color: "hsl(var(--chart-1))",
  },
  physicalActivity: {
    label: "Physical activity",
    color: "hsl(var(--chart-2))",
  },
  meals: {
    label: "Meals",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;
const mentalChartConfig = {
  value: {
    label: "Value",
  },
  stress: {
    label: "Stress",
    color: "hsl(var(--chart-1))",
  },
  mood: {
    label: "Mood",
    color: "hsl(var(--chart-2))",
  },
  mindfulness: {
    label: "Mindfulness",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

function DayHalfAnalysis({ half }: { half: "physical" | "mental" }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="h-72">
        <ChartContainer
          config={half == "physical" ? physicalChartConfig : mentalChartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={half == "physical" ? physicalChartData : mentalChartData}
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
        Great job, your day is 8/10. Here is some advice on how to make your
        life better:
      </p>
      <ul className="list-disc list-inside text-xl">
        <li>Drink more water</li>
        <li>Do more physical activity</li>
        <li>Have a balanced diet</li>
      </ul>
    </div>
  );
}

export function DayAnalysis() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <AppLayout>
      <div className="flex flex-col pt-4 self-center gap-3">
        <h2 className="font-bold text-xl">Day analysis</h2>
        <DatePicker date={date || new Date()} setDate={setDate} />
        <Tabs defaultValue="physical">
          <PhysicalMentalTabsList />
          <TabsContent value="physical" className="w-96">
            <DayHalfAnalysis half="physical" />
          </TabsContent>
          <TabsContent value="mental" className="w-96">
            <DayHalfAnalysis half="mental" />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
