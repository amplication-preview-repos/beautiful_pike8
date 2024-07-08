import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type SwipeCreateInput = {
  direction?: "Option1" | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
