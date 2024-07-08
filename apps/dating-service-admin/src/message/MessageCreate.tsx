import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="toUser" source="toUser" />
        <TextInput label="messageBody" multiline source="messageBody" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="fromUser" source="fromUser" />
      </SimpleForm>
    </Create>
  );
};
