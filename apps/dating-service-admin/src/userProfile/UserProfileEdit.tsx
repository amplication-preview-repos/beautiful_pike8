import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SwipeTitle } from "../swipe/SwipeTitle";

export const UserProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <div />
        <TextInput label="bio" multiline source="bio" />
        <NumberInput step={1} label="age" source="age" />
        <TextInput label="gender" source="gender" />
        <TextInput label="location" source="location" />
        <ReferenceArrayInput
          source="swipes"
          reference="Swipe"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SwipeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
