import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="toUser" source="toUser" />
        <TextInput label="messageBody" multiline source="messageBody" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="fromUser" source="fromUser" />
      </SimpleForm>
    </Edit>
  );
};
