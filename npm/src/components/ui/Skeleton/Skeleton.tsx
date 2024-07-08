import React from "react";

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = "full",
  height = "h-4",
  className = "",
}) => {
  return (
    <div
      className={`bg-gray-200 dark:bg-gray-700 animate-pulse rounded ${width} ${height} ${className}`}
    ></div>
  );
};

export default Skeleton;
