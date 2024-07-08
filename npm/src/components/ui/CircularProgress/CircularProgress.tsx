import React from "react";

interface CircularProgressProps {
  size?: number;
  strokeWidth?: number;
  value: number;
  textColor?: string;
  progressColor?: string;
  trackColor?: string;
  className?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 80,
  strokeWidth = 6,
  value,
  textColor = "dark:text-black text-white",
  progressColor = "dark:text-blue-500 text-blue-400",
  trackColor = "dark:text-gray-300 text-gray-700",
  className = "",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const currentValue = Math.min(Math.max(value, 0), 100);

  const dashOffset = circumference * (1 - currentValue / 100);

  return (
    <div
      className={`relative flex justify-center items-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        className="absolute"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          className={`stroke-current ${trackColor}`}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={`stroke-current ${progressColor}`}
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

      <span className={`absolute ${textColor} text-center`}>
        {currentValue}%
      </span>
    </div>
  );
};

export default CircularProgress;
