import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USERPROFILE_TITLE_FIELD } from "./UserProfileTitle";

export const UserProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="firstName" source="firstName" />
        <TextField label="lastName" source="lastName" />
        <TextField label="photos" source="photos" />
        <TextField label="bio" source="bio" />
        <TextField label="age" source="age" />
        <TextField label="gender" source="gender" />
        <TextField label="location" source="location" />
        <ReferenceManyField
          reference="Swipe"
          target="userProfileId"
          label="Swipes"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="direction" source="direction" />
            <ReferenceField
              label="UserProfile"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
