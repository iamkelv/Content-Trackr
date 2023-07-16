/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HashnodeCreateFormInputValues = {
    profile_name?: string;
    article_title?: string;
    pub_date?: string;
    article_url?: string;
    views?: number;
    comments?: string;
    engagement_rate?: number;
};
export declare type HashnodeCreateFormValidationValues = {
    profile_name?: ValidationFunction<string>;
    article_title?: ValidationFunction<string>;
    pub_date?: ValidationFunction<string>;
    article_url?: ValidationFunction<string>;
    views?: ValidationFunction<number>;
    comments?: ValidationFunction<string>;
    engagement_rate?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HashnodeCreateFormOverridesProps = {
    HashnodeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    profile_name?: PrimitiveOverrideProps<TextFieldProps>;
    article_title?: PrimitiveOverrideProps<TextFieldProps>;
    pub_date?: PrimitiveOverrideProps<TextFieldProps>;
    article_url?: PrimitiveOverrideProps<TextFieldProps>;
    views?: PrimitiveOverrideProps<TextFieldProps>;
    comments?: PrimitiveOverrideProps<TextFieldProps>;
    engagement_rate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HashnodeCreateFormProps = React.PropsWithChildren<{
    overrides?: HashnodeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HashnodeCreateFormInputValues) => HashnodeCreateFormInputValues;
    onSuccess?: (fields: HashnodeCreateFormInputValues) => void;
    onError?: (fields: HashnodeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HashnodeCreateFormInputValues) => HashnodeCreateFormInputValues;
    onValidate?: HashnodeCreateFormValidationValues;
} & React.CSSProperties>;
export default function HashnodeCreateForm(props: HashnodeCreateFormProps): React.ReactElement;
