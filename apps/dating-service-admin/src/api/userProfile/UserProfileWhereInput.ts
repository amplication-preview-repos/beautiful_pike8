import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SwipeListRelationFilter } from "../swipe/SwipeListRelationFilter";

export type UserProfileWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  photos?: JsonFilter;
  bio?: StringNullableFilter;
  age?: IntNullableFilter;
  gender?: StringNullableFilter;
  location?: StringNullableFilter;
  swipes?: SwipeListRelationFilter;
};
