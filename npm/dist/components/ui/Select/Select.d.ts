import React from "react";
import { VariantProps } from "class-variance-authority";
interface Option {
    value: string;
    label: string;
}
interface SelectProps extends VariantProps<typeof selectStyles> {
    options: Option[];
    className?: string;
}
declare const selectStyles: (props?: ({
    color?: "primary" | "secondary" | "danger" | "plate" | "blue" | null | undefined;
    defaultVariants?: "color" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const Select: React.FC<SelectProps>;
export default Select;
//# sourceMappingURL=Select.d.ts.map