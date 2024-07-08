import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="toUser" source="toUser" />
        <TextField label="messageBody" source="messageBody" />
        <TextField label="timestamp" source="timestamp" />
        <TextField label="fromUser" source="fromUser" />
      </SimpleShowLayout>
    </Show>
  );
};
