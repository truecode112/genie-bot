import { useState, useEffect } from "react";
import { Progress } from "antd";

export default function DummyProgressBar({ start, completed, timer }) {
  const [percent, setPercent] = useState(0);
  const barColor = "rgb(21 128 61)";

  useEffect(() => {
    if (completed) {
      setPercent(100);
    } else if (start) {
      const interval = setInterval(() => {
        setPercent((prevPercent) => {
          const newPercent = prevPercent + 1;
          return newPercent >= 100 ? 100 : newPercent;
        });
      }, timer);

      return () => clearInterval(interval);
    }
  }, [completed, start]);

  return (
    <Progress
      type="line"
      percent={percent}
      status={completed ? "success" : "active"}
      strokeColor={barColor}
      showInfo
    />
  );
}
