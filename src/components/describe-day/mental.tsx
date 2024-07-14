import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";

export function Mental({
  mindfulness,
  setMindfulness,
  mood,
  setMood,
  stress,
  setStress,
  feeling,
  setFeeling,
  submit,
}: {
  mindfulness: string;
  setMindfulness: (value: string) => void;
  mood: number;
  setMood: (value: number) => void;
  stress: number;
  setStress: (value: number) => void;
  feeling: string;
  setFeeling: (value: string) => void;
  submit: () => void;
}) {
  return (
    <>
      <div className="mb-4">
        <Label className="text-xl mb-2">
          What mindfulness practices you did? How long?
        </Label>
        <Textarea
          placeholder="Type your answer here..."
          className="w-full h-24"
          value={mindfulness}
          onChange={(e) => setMindfulness(e.target.value)}
        />
      </div>
      <div className="mb-4 flex flex-col gap-2">
        <Label className="text-xl">Rate your mood:</Label>
        <Slider
          defaultValue={[1]}
          max={10}
          step={1}
          value={[mood]}
          onValueChange={(e) => setMood(e[0])}
        />
      </div>
      <div className="mb-4 flex flex-col gap-2">
        <Label className="text-xl">Rate your stress level:</Label>
        <Slider
          defaultValue={[1]}
          max={10}
          step={1}
          value={[stress]}
          onValueChange={(e) => setStress(e[0])}
        />
      </div>
      <div className="mb-4">
        <Label className="text-xl mb-2">How do you feel? Why?</Label>
        <Textarea
          placeholder="Type your answer here..."
          className="w-full h-24"
          value={feeling}
          onChange={(e) => setFeeling(e.target.value)}
        />
      </div>
      <div className="flex justify-center gap-3">
        <Button
          variant="default"
          className="w-1/3 rounded-full"
          onClick={submit}
        >
          Submit
        </Button>
      </div>
    </>
  );
}
