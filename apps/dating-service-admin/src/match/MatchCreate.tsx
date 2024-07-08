import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const MatchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="matchDate" source="matchDate" />
        <TextInput label="UserProfile1" source="userProfile1" />
        <TextInput label="UserProfile2" source="userProfile2" />
      </SimpleForm>
    </Create>
  );
};
