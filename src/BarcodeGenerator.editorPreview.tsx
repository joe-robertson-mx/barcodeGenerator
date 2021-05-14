import { ReactNode, createElement } from "react";
import { BarcodeComponent } from "./components/BarcodeComponent";
import { BarcodeGeneratorPreviewProps } from "../typings/BarcodeGeneratorProps";

declare function require(name: string): string;

export const BarcodeGenerator = (props: BarcodeGeneratorPreviewProps): ReactNode => {
    return <BarcodeComponent inputString={props.value} />;
};

export function getPreviewCss(): string {
    return require("./ui/BarcodeGenerator.css");
}
