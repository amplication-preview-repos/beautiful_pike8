import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type SwipeUpdateInput = {
  direction?: "Option1" | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
