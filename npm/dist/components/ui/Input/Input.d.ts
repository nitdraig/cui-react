import React from "react";
import { VariantProps } from "class-variance-authority";
interface InputProps extends VariantProps<typeof inputStyles> {
    name?: string;
    id?: string;
    labelText?: string;
    type?: string;
    pattern?: string;
    color?: "primary" | "secondary" | "success" | "warning" | "dark" | "light";
    textColor?: "primary" | "secondary" | "success" | "warning" | "dark" | "light";
}
declare const inputStyles: (props?: ({
    color?: "primary" | "secondary" | "success" | "warning" | "dark" | "light" | null | undefined;
    textColor?: "primary" | "secondary" | "success" | "warning" | "dark" | "light" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const Input: React.FC<InputProps>;
export default Input;
//# sourceMappingURL=Input.d.ts.map