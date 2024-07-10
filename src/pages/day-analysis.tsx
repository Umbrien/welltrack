import { AppLayout } from "../layout/AppLayout";

function StatsCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white flex flex-col p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl">{title}</h2>
      <p className="text-3xl">{value}</p>
    </div>
  );
}

export function DayAnalysis() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-6">
          <StatsCard title="Lorem" value="123" />
          <StatsCard title="Ipsum" value="456" />
          <StatsCard title="Dolor" value="789" />
          <StatsCard title="Sit" value="012" />
        </div>
        <h2>Day analysis</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
    </AppLayout>
  );
}
