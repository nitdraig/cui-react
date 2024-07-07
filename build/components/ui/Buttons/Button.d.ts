import React from "react";
import { VariantProps } from "class-variance-authority";
interface ButtonProps extends VariantProps<typeof buttonStyles> {
    text: string;
    onClick?: () => void;
}
declare const buttonStyles: (props?: ({
    size?: "small" | "medium" | "large" | "full" | null | undefined;
    color?: "primary" | "secondary" | "danger" | "plate" | null | undefined;
    defaultVariants?: "color" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export default function Button({ size, color, text, onClick, ...props }: ButtonProps): React.JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map