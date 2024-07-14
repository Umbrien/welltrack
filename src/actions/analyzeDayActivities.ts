import { type AnalyzeDayActivities } from "wasp/server/operations";

type Input = {
  physical: {
    ate: string;
    physicalActivity: string;
    hydration: number;
  };
  mental: {
    mindfulness: string;
    mood: number;
    stress: number;
    feeling: string;
  };
};

type AiAnalysisOutput = {
  physical: {
    meals: number;
    physicalActivity: number;
  };
  mental: {
    mindfulness: number;
  };
};
async function mockAiAnalysis({
  physical,
  mental,
}: {
  physical: {
    ate: string;
    physicalActivity: string;
  };
  mental: {
    mindfulness: string;
    feeling: string;
  };
}): Promise<AiAnalysisOutput> {
  return {
    physical: {
      meals: 1,
      physicalActivity: 1,
    },
    mental: {
      mindfulness: 1,
    },
  };
}

export const analyzeDayActivities: AnalyzeDayActivities<Input> = async (
  { physical, mental },
  context
) => {
  if (!context.user) return;

  const aiAnalysis = await mockAiAnalysis({ physical, mental });

  await context.entities.PhysicalActivityAnalysis.create({
    data: {
      userId: context.user.id,
      date: new Date(),
      meals: aiAnalysis.physical.meals,
      physicalActivity: aiAnalysis.physical.physicalActivity,
      hydration: physical.hydration,
      advices: JSON.stringify(["Drink more water"]),
    },
  });

  await context.entities.MentalActivityAnalysis.create({
    data: {
      userId: context.user.id,
      date: new Date(),
      mindfulness: aiAnalysis.mental.mindfulness,
      mood: mental.mood,
      stress: mental.stress,
      advices: JSON.stringify(["Take a break"]),
    },
  });
};
