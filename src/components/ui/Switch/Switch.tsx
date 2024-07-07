import React, { useState } from "react";

interface SwitchProps {
  label: string;
  initialChecked?: boolean;
  onChange: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({
  label,
  initialChecked = false,
  onChange,
}) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
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
              checked ? "bg-blue-500" : "bg-gray-600"
            }`}
          ></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform ${
              checked ? "translate-x-full bg-blue-500" : ""
            }`}
          ></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium">{label}</div>
      </label>
    </div>
  );
};

export default Switch;
