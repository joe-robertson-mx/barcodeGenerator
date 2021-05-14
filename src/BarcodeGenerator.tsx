import { ReactNode, createElement } from "react";
import { BarcodeComponent } from "./components/BarcodeComponent";
import {ValueStatus} from 'mendix'

import { BarcodeGeneratorContainerProps } from "../typings/BarcodeGeneratorProps";

import "./ui/BarcodeGenerator.css";

const BarcodeGenerator = (props: BarcodeGeneratorContainerProps): ReactNode => {


    return (
        <div>
            {(props.value.status === ValueStatus.Available && props.value.value) &&
            <BarcodeComponent 
                    inputString={props.value.value ? props.value.value:""}
                    barcodeFormat={props.barcodeType ? props.barcodeType.valueOf():undefined}
                    width={props.width ? props.width:undefined}
                    height={props.height ? props.height:undefined} /> }
        </div>)
};

export default BarcodeGenerator;
