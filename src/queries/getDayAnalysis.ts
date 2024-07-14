import { type GetDayAnalysis } from "wasp/server/operations";

type Output = {
  physical: {
    meals: number;
    physicalActivity: number;
    hydration: number;
    advices: string[];
  };
  mental: {
    mindfulness: number;
    mood: number;
    stress: number;
    advices: string[];
  };
};
export const getDayAnalysis: GetDayAnalysis<{ date: Date }, Output> = async (
  args,
  context
) => {
  const startOfDay = new Date(args.date);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(args.date);
  endOfDay.setHours(23, 59, 59, 999);

  const physical = await context.entities.PhysicalActivityAnalysis.findFirst({
    where: {
      date: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
  });

  const mental = await context.entities.MentalActivityAnalysis.findFirst({
    where: {
      date: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
  });

  const physicalAdvices: string[] = JSON.parse(physical?.advices || "[]");
  const mentalAdvices: string[] = JSON.parse(mental?.advices || "[]");

  return {
    physical: {
      meals: physical?.meals || 0,
      physicalActivity: physical?.physicalActivity || 0,
      hydration: physical?.hydration || 0,
      advices: physicalAdvices,
    },
    mental: {
      mindfulness: mental?.mindfulness || 0,
      mood: mental?.mood || 0,
      stress: mental?.stress || 0,
      advices: mentalAdvices,
    },
  };
};
