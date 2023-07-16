/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Hashnode } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function HashnodeUpdateForm(props) {
  const {
    id: idProp,
    hashnode: hashnodeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    profile_name: "",
    article_title: "",
    pub_date: "",
    article_url: "",
    views: "",
    comments: "",
    engagement_rate: "",
  };
  const [profile_name, setProfile_name] = React.useState(
    initialValues.profile_name
  );
  const [article_title, setArticle_title] = React.useState(
    initialValues.article_title
  );
  const [pub_date, setPub_date] = React.useState(initialValues.pub_date);
  const [article_url, setArticle_url] = React.useState(
    initialValues.article_url
  );
  const [views, setViews] = React.useState(initialValues.views);
  const [comments, setComments] = React.useState(initialValues.comments);
  const [engagement_rate, setEngagement_rate] = React.useState(
    initialValues.engagement_rate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = hashnodeRecord
      ? { ...initialValues, ...hashnodeRecord }
      : initialValues;
    setProfile_name(cleanValues.profile_name);
    setArticle_title(cleanValues.article_title);
    setPub_date(cleanValues.pub_date);
    setArticle_url(cleanValues.article_url);
    setViews(cleanValues.views);
    setComments(cleanValues.comments);
    setEngagement_rate(cleanValues.engagement_rate);
    setErrors({});
  };
  const [hashnodeRecord, setHashnodeRecord] = React.useState(hashnodeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Hashnode, idProp)
        : hashnodeModelProp;
      setHashnodeRecord(record);
    };
    queryData();
  }, [idProp, hashnodeModelProp]);
  React.useEffect(resetStateValues, [hashnodeRecord]);
  const validations = {
    profile_name: [],
    article_title: [],
    pub_date: [],
    article_url: [{ type: "URL" }],
    views: [],
    comments: [],
    engagement_rate: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          profile_name,
          article_title,
          pub_date,
          article_url,
          views,
          comments,
          engagement_rate,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Hashnode.copyOf(hashnodeRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "HashnodeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Profile name"
        isRequired={false}
        isReadOnly={false}
        value={profile_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              profile_name: value,
              article_title,
              pub_date,
              article_url,
              views,
              comments,
              engagement_rate,
            };
            const result = onChange(modelFields);
            value = result?.profile_name ?? value;
          }
          if (errors.profile_name?.hasError) {
            runValidationTasks("profile_name", value);
          }
          setProfile_name(value);
        }}
        onBlur={() => runValidationTasks("profile_name", profile_name)}
        errorMessage={errors.profile_name?.errorMessage}
        hasError={errors.profile_name?.hasError}
        {...getOverrideProps(overrides, "profile_name")}
      ></TextField>
      <TextField
        label="Article title"
        isRequired={false}
        isReadOnly={false}
        value={article_title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              profile_name,
              article_title: value,
              pub_date,
              article_url,
              views,
              comments,
              engagement_rate,
            };
            const result = onChange(modelFields);
            value = result?.article_title ?? value;
          }
          if (errors.article_title?.hasError) {
            runValidationTasks("article_title", value);
          }
          setArticle_title(value);
        }}
        onBlur={() => runValidationTasks("article_title", article_title)}
        errorMessage={errors.article_title?.errorMessage}
        hasError={errors.article_title?.hasError}
        {...getOverrideProps(overrides, "article_title")}
      ></TextField>
      <TextField
        label="Pub date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={pub_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              profile_name,
              article_title,
              pub_date: value,
              article_url,
              views,
              comments,
              engagement_rate,
            };
            const result = onChange(modelFields);
            value = result?.pub_date ?? value;
          }
          if (errors.pub_date?.hasError) {
            runValidationTasks("pub_date", value);
          }
          setPub_date(value);
        }}
        onBlur={() => runValidationTasks("pub_date", pub_date)}
        errorMessage={errors.pub_date?.errorMessage}
        hasError={errors.pub_date?.hasError}
        {...getOverrideProps(overrides, "pub_date")}
      ></TextField>
      <TextField
        label="Article url"
        isRequired={false}
        isReadOnly={false}
        value={article_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              profile_name,
              article_title,
              pub_date,
              article_url: value,
              views,
              comments,
              engagement_rate,
            };
            const result = onChange(modelFields);
            value = result?.article_url ?? value;
          }
          if (errors.article_url?.hasError) {
            runValidationTasks("article_url", value);
          }
          setArticle_url(value);
        }}
        onBlur={() => runValidationTasks("article_url", article_url)}
        errorMessage={errors.article_url?.errorMessage}
        hasError={errors.article_url?.hasError}
        {...getOverrideProps(overrides, "article_url")}
      ></TextField>
      <TextField
        label="Views"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={views}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              profile_name,
              article_title,
              pub_date,
              article_url,
              views: value,
              comments,
              engagement_rate,
            };
            const result = onChange(modelFields);
            value = result?.views ?? value;
          }
          if (errors.views?.hasError) {
            runValidationTasks("views", value);
          }
          setViews(value);
        }}
        onBlur={() => runValidationTasks("views", views)}
        errorMessage={errors.views?.errorMessage}
        hasError={errors.views?.hasError}
        {...getOverrideProps(overrides, "views")}
      ></TextField>
      <TextField
        label="Comments"
        isRequired={false}
        isReadOnly={false}
        value={comments}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              profile_name,
              article_title,
              pub_date,
              article_url,
              views,
              comments: value,
              engagement_rate,
            };
            const result = onChange(modelFields);
            value = result?.comments ?? value;
          }
          if (errors.comments?.hasError) {
            runValidationTasks("comments", value);
          }
          setComments(value);
        }}
        onBlur={() => runValidationTasks("comments", comments)}
        errorMessage={errors.comments?.errorMessage}
        hasError={errors.comments?.hasError}
        {...getOverrideProps(overrides, "comments")}
      ></TextField>
      <TextField
        label="Engagement rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={engagement_rate}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              profile_name,
              article_title,
              pub_date,
              article_url,
              views,
              comments,
              engagement_rate: value,
            };
            const result = onChange(modelFields);
            value = result?.engagement_rate ?? value;
          }
          if (errors.engagement_rate?.hasError) {
            runValidationTasks("engagement_rate", value);
          }
          setEngagement_rate(value);
        }}
        onBlur={() => runValidationTasks("engagement_rate", engagement_rate)}
        errorMessage={errors.engagement_rate?.errorMessage}
        hasError={errors.engagement_rate?.hasError}
        {...getOverrideProps(overrides, "engagement_rate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || hashnodeModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || hashnodeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
