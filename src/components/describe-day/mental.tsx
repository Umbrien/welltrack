import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";

export function Mental() {
  return (
    <>
      <div className="mb-4">
        <Label className="text-xl mb-2">
          What mindfulness practices you did? How long?
        </Label>
        <Textarea
          placeholder="Type your answer here..."
          className="w-full h-24"
        />
      </div>
      <div className="mb-4 flex flex-col gap-2">
        <Label className="text-xl">Rate your mood:</Label>
        <Slider defaultValue={[4]} max={10} step={1} />
      </div>
      <div className="mb-4 flex flex-col gap-2">
        <Label className="text-xl">Rate your stress level:</Label>
        <Slider defaultValue={[8]} max={10} step={1} />
      </div>
      <div className="mb-4">
        <Label className="text-xl mb-2">How do you feel? Why?</Label>
        <Textarea
          placeholder="Type your answer here..."
          className="w-full h-24"
        />
      </div>
      <div className="flex justify-center gap-3">
        <Button variant="outline" className="w-1/3 rounded-full">
          Back
        </Button>
        <Button variant="default" className="w-1/3 rounded-full">
          Submit
        </Button>
      </div>
    </>
  );
}
