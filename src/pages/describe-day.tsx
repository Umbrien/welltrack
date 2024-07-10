import { AppLayout } from "../layout/AppLayout";

export function DescribeDay() {
  return (
    <AppLayout>
      <form className="flex gap-3 p-4 flex-col">
        <h1 className="text-3xl">Lorem</h1>
        <input type="text" placeholder="Enter your day" />

        <h2>Ipsum</h2>
        <input type="text" placeholder="Enter your day" />
        <button type="submit">Submit</button>
      </form>
    </AppLayout>
  );
}
