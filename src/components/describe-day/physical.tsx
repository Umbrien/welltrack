import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

function FullWaterCup({ onClick }: { onClick: () => void }) {
  return (
    <svg
      width="46"
      height="60"
      viewBox="0 0 46 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H45V48C45 54.0751 40.0751 59 34 59H12C5.92487 59 1 54.0751 1 48V1Z"
        fill="#D7F1FF"
      />
      <path
        d="M1 1H45V48C45 54.0751 40.0751 59 34 59H12C5.92487 59 1 54.0751 1 48V1Z"
        stroke="#8ED8FE"
        stroke-width="2"
      />
    </svg>
  );
}

function AddWaterCup({ onClick }: { onClick: () => void }) {
  return (
    <svg
      width="46"
      height="60"
      viewBox="0 0 46 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H45V48C45 54.0751 40.0751 59 34 59H12C5.92487 59 1 54.0751 1 48V1Z"
        stroke="#E8E8E8"
        stroke-width="2"
      />
      <path
        d="M20.896 36.924V31.092H15.136V27.708H20.896V21.876H24.424V27.708H30.184V31.092H24.424V36.924H20.896Z"
        fill="#E8E8E8"
      />
    </svg>
  );
}

export function Physical() {
  return (
    <>
      <div className="mb-4">
        <Label className="text-xl mb-2">What you’ve ate?</Label>
        <Textarea
          placeholder="Type your answer here..."
          className="w-full h-24"
        />
      </div>
      <div className="mb-4">
        <Label className="text-xl mb-2">
          What physical activity you did? How long?
        </Label>
        <Textarea
          placeholder="Type your answer here..."
          className="w-full h-24"
        />
      </div>
      <div className="mb-4">
        <Label className="text-xl mb-2">
          How much water cups you've drank?
        </Label>
        <div className="flex flex-wrap gap-2">
          <FullWaterCup onClick={() => {}} />
          <AddWaterCup onClick={() => {}} />
        </div>
      </div>
      <div className="flex justify-center gap-3">
        <Button variant="default" className="w-1/3 rounded-full">
          Next
        </Button>
      </div>
    </>
  );
}
