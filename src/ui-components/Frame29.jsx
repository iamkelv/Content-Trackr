/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function Frame29(props) {
  const { title, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        tittle: {},
        body: {},
        text: {},
        "Frame 30": {},
        TextField33472475: {},
        TextField33472483: {},
        TextField33512483: {},
        "Frame 31": {},
        "sign up for accounts": {},
        "your password must have at least one character": {},
        "Button/Large/Primary": {},
        Checkbox: {},
        "By creating an account means you agree to the Terms & Conditions and our Privacy Policy":
          {},
        agree: {},
        Frame29: {},
      },
    },
    {
      variantValues: { property1: "Variant2" },
      overrides: {
        tittle: {},
        body: {},
        text: {},
        "Frame 30": {},
        TextField33472475: {},
        TextField33472483: {},
        TextField33512483: {},
        "Frame 31": {},
        "sign up for accounts": {},
        "your password must have at least one character": {},
        "Button/Large/Primary": {},
        Checkbox: {},
        "By creating an account means you agree to the Terms & Conditions and our Privacy Policy":
          {},
        agree: {},
        Frame29: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="1400px"
      height="900px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Frame29")}
      {...rest}
    >
      <View
        width="723px"
        height="900px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-45deg, rgba(145,0,145,0.9), rgba(97,117,190,1))"
        {...getOverrideProps(overrides, "Frame 30")}
      >
        <Flex
          gap="12px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="386px"
          left="calc(50% - 269px - -0.5px)"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "text")}
        >
          <View
            width="466px"
            height="30px"
            {...getOverrideProps(overrides, "tittle")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(248,250,252,1)"
            lineHeight="22.399999618530273px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="integrate your content writing on different platform in an easily customizable app."
            {...getOverrideProps(overrides, "body")}
          ></Text>
        </Flex>
      </View>
      <View
        width="300px"
        height="200px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="245px"
        left="774px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 31")}
      >
        <TextField
          width="300px"
          height="unset"
          placeholder="username"
          position="absolute"
          top="0px"
          left="0px"
          label=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField33472475")}
        ></TextField>
        <TextField
          width="300px"
          height="unset"
          placeholder="email"
          position="absolute"
          top="64px"
          left="0px"
          label=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField33472483")}
        ></TextField>
        <TextField
          width="300px"
          height="unset"
          placeholder="Passwordl"
          position="absolute"
          top="128px"
          left="0px"
          label=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField33512483")}
        ></TextField>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="239px"
        left="774px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="sign up for accounts"
        {...getOverrideProps(overrides, "sign up for accounts")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="514px"
        left="774px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="your password must have at least one character"
        {...getOverrideProps(
          overrides,
          "your password must have at least one character"
        )}
      ></Text>
      <Flex
        width="340px"
        height="46px"
        {...getOverrideProps(overrides, "Button/Large/Primary")}
      ></Flex>
      <Flex
        gap="12px"
        direction="row"
        width="340px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="554px"
        left="774px"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "agree")}
      >
        <View
          width="20px"
          height="20px"
          {...getOverrideProps(overrides, "Checkbox")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(100,116,139,1)"
          lineHeight="19.200000762939453px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="By creating an account means you agree to the Terms&#xA;& Conditions and our Privacy Policy"
          {...getOverrideProps(
            overrides,
            "By creating an account means you agree to the Terms & Conditions and our Privacy Policy"
          )}
        ></Text>
      </Flex>
    </View>
  );
}
