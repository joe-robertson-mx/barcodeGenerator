import { createElement, ReactElement } from "react";
import Barcode from "react-barcode";

export interface BarcodeComponentProps {
    inputString: string;
    barcodeFormat?: string;
    width?:number;
    height?:number
}

export const BarcodeComponent = (props: BarcodeComponentProps): ReactElement => {
    
    const {inputString, barcodeFormat, width, height} = props
    return <Barcode 
                value={inputString}
                format={barcodeFormat} 
                width={width}
                height={height}
            />;
};
