import { useState } from "react";
import { AppLayout } from "../layout/AppLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { MeasureVariant } from "../types";
import { physicalChartConfig, mentalChartConfig } from "../types";

export function MonthAnalysis() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-3">
        <ChartComponent variant="physical" />
        <ChartComponent variant="mental" />
      </div>
    </AppLayout>
  );
}

const physicalChartData = [
  { dayNumber: "1", meals: 6, physicalActivity: 8, hydration: 3 },
  { dayNumber: "2", meals: 5, physicalActivity: 2, hydration: 5 },
  { dayNumber: "3", meals: 7, physicalActivity: 1, hydration: 7 },
  { dayNumber: "4", meals: 3, physicalActivity: 9, hydration: 4 },
  { dayNumber: "5", meals: 9, physicalActivity: 3, hydration: 6 },
  { dayNumber: "6", meals: 4, physicalActivity: 4, hydration: 8 },
];

const mentalChartData = [
  { dayNumber: "1", mindfulness: 6, mood: 8, stress: 3 },
  { dayNumber: "2", mindfulness: 5, mood: 2, stress: 5 },
  { dayNumber: "3", mindfulness: 7, mood: 1, stress: 7 },
  { dayNumber: "4", mindfulness: 3, mood: 9, stress: 4 },
  { dayNumber: "5", mindfulness: 9, mood: 3, stress: 6 },
  { dayNumber: "6", mindfulness: 4, mood: 4, stress: 8 },
];

export function ChartComponent({ variant }: { variant: MeasureVariant }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{variant == "physical" ? "Physical" : "Mental"}</CardTitle>
        <CardDescription>activity analytics</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            variant == "physical" ? physicalChartConfig : mentalChartConfig
          }
        >
          <LineChart
            accessibilityLayer
            data={variant == "physical" ? physicalChartData : mentalChartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="dayNumber"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey={variant == "physical" ? "meals" : "mindfulness"}
              type="monotone"
              stroke="hsl(var(--chart-3))"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey={variant == "physical" ? "physicalActivity" : "mood"}
              type="monotone"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey={variant == "physical" ? "hydration" : "stress"}
              type="monotone"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Average {variant == "physical" ? "meals" : "mindfulness"} score:
              7.5
            </div>
            <div className="flex items-center gap-2 font-medium leading-none">
              Average {variant == "physical" ? "physical activity" : "mood"}{" "}
              score: 8.5
            </div>
            <div className="flex items-center gap-2 font-medium leading-none">
              Average {variant == "physical" ? "hydration" : "stress"} score:
              8.5
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
