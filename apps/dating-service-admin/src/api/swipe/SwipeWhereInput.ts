import { StringFilter } from "../../util/StringFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type SwipeWhereInput = {
  id?: StringFilter;
  direction?: "Option1";
  userProfile?: UserProfileWhereUniqueInput;
};
