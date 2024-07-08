import React from "react";
import { VariantProps } from "class-variance-authority";
interface SpinnerProps extends VariantProps<typeof spinnerStyles> {
}
declare const spinnerStyles: (props?: ({
    size?: "small" | "medium" | "large" | null | undefined;
    color?: "white" | "blue" | "red" | "black" | "green" | "yellow" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const Spinner: React.FC<SpinnerProps>;
export default Spinner;
//# sourceMappingURL=Spinner.d.ts.map