/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DevTo } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DevToUpdateFormInputValues = {
    profile_name?: string;
    article_title?: string;
    pub_date?: string;
    article_url?: string;
    views?: number;
    comments?: string;
    engagement_rate?: number;
};
export declare type DevToUpdateFormValidationValues = {
    profile_name?: ValidationFunction<string>;
    article_title?: ValidationFunction<string>;
    pub_date?: ValidationFunction<string>;
    article_url?: ValidationFunction<string>;
    views?: ValidationFunction<number>;
    comments?: ValidationFunction<string>;
    engagement_rate?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DevToUpdateFormOverridesProps = {
    DevToUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    profile_name?: PrimitiveOverrideProps<TextFieldProps>;
    article_title?: PrimitiveOverrideProps<TextFieldProps>;
    pub_date?: PrimitiveOverrideProps<TextFieldProps>;
    article_url?: PrimitiveOverrideProps<TextFieldProps>;
    views?: PrimitiveOverrideProps<TextFieldProps>;
    comments?: PrimitiveOverrideProps<TextFieldProps>;
    engagement_rate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DevToUpdateFormProps = React.PropsWithChildren<{
    overrides?: DevToUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    devTo?: DevTo;
    onSubmit?: (fields: DevToUpdateFormInputValues) => DevToUpdateFormInputValues;
    onSuccess?: (fields: DevToUpdateFormInputValues) => void;
    onError?: (fields: DevToUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DevToUpdateFormInputValues) => DevToUpdateFormInputValues;
    onValidate?: DevToUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DevToUpdateForm(props: DevToUpdateFormProps): React.ReactElement;
