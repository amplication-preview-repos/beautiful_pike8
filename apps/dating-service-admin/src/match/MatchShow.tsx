import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MatchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="matchDate" source="matchDate" />
        <TextField label="UserProfile1" source="userProfile1" />
        <TextField label="UserProfile2" source="userProfile2" />
      </SimpleShowLayout>
    </Show>
  );
};
