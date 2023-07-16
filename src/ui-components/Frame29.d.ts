/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame29OverridesProps = {
    Frame29?: PrimitiveOverrideProps<ViewProps>;
    "Frame 30"?: PrimitiveOverrideProps<ViewProps>;
    text?: PrimitiveOverrideProps<FlexProps>;
    tittle?: PrimitiveOverrideProps<ViewProps>;
    body?: PrimitiveOverrideProps<TextProps>;
    "Frame 31"?: PrimitiveOverrideProps<ViewProps>;
    TextField33472475?: PrimitiveOverrideProps<TextFieldProps>;
    TextField33472483?: PrimitiveOverrideProps<TextFieldProps>;
    TextField33512483?: PrimitiveOverrideProps<TextFieldProps>;
    "sign up for accounts"?: PrimitiveOverrideProps<TextProps>;
    "your password must have at least one character"?: PrimitiveOverrideProps<TextProps>;
    "Button/Large/Primary"?: PrimitiveOverrideProps<FlexProps>;
    agree?: PrimitiveOverrideProps<FlexProps>;
    Checkbox?: PrimitiveOverrideProps<ViewProps>;
    "By creating an account means you agree to the Terms & Conditions and our Privacy Policy"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Frame29Props = React.PropsWithChildren<Partial<ViewProps> & {
    title?: String;
} & {
    property1?: "Default" | "Variant2";
} & {
    overrides?: Frame29OverridesProps | undefined | null;
}>;
export default function Frame29(props: Frame29Props): React.ReactElement;
