import React from "react";

interface CircularProgressProps {
  size?: number;
  strokeWidth?: number;
  value: number;
  color?: string;
  className?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 80,
  strokeWidth = 6,
  value,
  color = "text-blue-500 dark:text-blue-400",
  className = "",
}) => {
  const radius = (size - strokeWidth) / 2;

  const circumference = 2 * Math.PI * radius;

  const dashOffset = circumference * (1 - value / 100);

  return (
    <svg
      className={`block ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        className="stroke-current"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        className={`${color}`}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        fill="none"
        strokeLinecap="round"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
};

export default CircularProgress;
