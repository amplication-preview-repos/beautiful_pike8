import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const MatchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="matchDate" source="matchDate" />
        <TextInput label="UserProfile1" source="userProfile1" />
        <TextInput label="UserProfile2" source="userProfile2" />
      </SimpleForm>
    </Edit>
  );
};
