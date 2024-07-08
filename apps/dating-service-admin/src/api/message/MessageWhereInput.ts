import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  id?: StringFilter;
  toUser?: StringNullableFilter;
  messageBody?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  fromUser?: StringNullableFilter;
};
