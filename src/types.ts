import { ChartConfig } from "./components/ui/chart";
export type MeasureVariant = "physical" | "mental";

export const physicalChartConfig = {
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

export const mentalChartConfig = {
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
