import React from "react";
interface SwitchProps {
    label: string;
    initialChecked?: boolean;
    onChange: (checked: boolean) => void;
    activeColor?: "white" | "black" | "primary" | "secondary";
    inactiveColor?: "white" | "black" | "primary" | "secondary";
}
declare const Switch: React.FC<SwitchProps>;
export default Switch;
//# sourceMappingURL=Switch.d.ts.map