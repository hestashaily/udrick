import { Progress } from "@/components/ui/progress";

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: StepProgressProps) {
  const percent = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-end mb-1 text-sm text-gray-500">
        Step {currentStep} of {totalSteps}
      </div>
      <Progress
        value={percent}
        className="h-2 rounded-full bg-gray-200 [&>div]:bg-yellow-400"
      />
    </div>
  );
}
