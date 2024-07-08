import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MatchWhereInput = {
  id?: StringFilter;
  matchDate?: DateTimeNullableFilter;
  userProfile1?: StringNullableFilter;
  userProfile2?: StringNullableFilter;
};
