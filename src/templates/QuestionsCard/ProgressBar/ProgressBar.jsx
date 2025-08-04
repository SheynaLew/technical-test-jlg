import * as Progress from "@radix-ui/react-progress";
import "./ProgressBar.css";

export default function ProgressBar({ progress }) {
  return (
    <Progress.Root className="progress-root" value={progress}>
      <Progress.Indicator
        className="progress-indicator"
        style={{ transform: `translateX(${progress - 100}%)` }}
        data-value={progress}
      />
    </Progress.Root>
  );
}
