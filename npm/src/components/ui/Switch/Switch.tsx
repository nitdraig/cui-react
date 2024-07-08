import React, { useState } from "react";

interface SwitchProps {
  label: string;
  initialChecked?: boolean;
  onChange: (checked: boolean) => void;
  activeColor?: "white" | "black" | "primary" | "secondary";
  inactiveColor?: "white" | "black" | "primary" | "secondary";
}

const Switch: React.FC<SwitchProps> = ({
  label,
  initialChecked = false,
  onChange,
  activeColor = "primary",
  inactiveColor = "secondary",
}) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  const getColorClass = (
    color: "white" | "black" | "primary" | "secondary"
  ) => {
    switch (color) {
      case "white":
        return "bg-white border-2 border-gray-300";
      case "black":
        return "bg-black border-2 border-gray-300";
      case "primary":
        return "bg-blue-500  border-2 border-gray-300";
      case "secondary":
        return "bg-gray-600  border-2 border-gray-300";
      default:
        return "bg-blue-600  border-2 border-blue-300";
    }
  };

  return (
    <div className="flex items-center justify-between">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={checked}
            onChange={handleChange}
          />
          <div
            className={`block w-10 h-6 rounded-full ${
              checked
                ? getColorClass(activeColor)
                : getColorClass(inactiveColor)
            }`}
          ></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform ${
              checked ? "translate-x-full " + getColorClass(activeColor) : ""
            }`}
          ></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium">{label}</div>
      </label>
    </div>
  );
};

export default Switch;
