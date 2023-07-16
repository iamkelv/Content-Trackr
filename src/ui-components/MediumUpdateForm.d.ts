/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Medium } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MediumUpdateFormInputValues = {
    profile_name?: string;
    article_title?: string;
    pub_date?: string;
    article_url?: string;
    views?: number;
    comments?: string;
    engagement_rate?: number;
};
export declare type MediumUpdateFormValidationValues = {
    profile_name?: ValidationFunction<string>;
    article_title?: ValidationFunction<string>;
    pub_date?: ValidationFunction<string>;
    article_url?: ValidationFunction<string>;
    views?: ValidationFunction<number>;
    comments?: ValidationFunction<string>;
    engagement_rate?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MediumUpdateFormOverridesProps = {
    MediumUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    profile_name?: PrimitiveOverrideProps<TextFieldProps>;
    article_title?: PrimitiveOverrideProps<TextFieldProps>;
    pub_date?: PrimitiveOverrideProps<TextFieldProps>;
    article_url?: PrimitiveOverrideProps<TextFieldProps>;
    views?: PrimitiveOverrideProps<TextFieldProps>;
    comments?: PrimitiveOverrideProps<TextFieldProps>;
    engagement_rate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MediumUpdateFormProps = React.PropsWithChildren<{
    overrides?: MediumUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    medium?: Medium;
    onSubmit?: (fields: MediumUpdateFormInputValues) => MediumUpdateFormInputValues;
    onSuccess?: (fields: MediumUpdateFormInputValues) => void;
    onError?: (fields: MediumUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MediumUpdateFormInputValues) => MediumUpdateFormInputValues;
    onValidate?: MediumUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MediumUpdateForm(props: MediumUpdateFormProps): React.ReactElement;
