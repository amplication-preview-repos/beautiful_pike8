import { InputJsonValue } from "../../types";
import { SwipeCreateNestedManyWithoutUserProfilesInput } from "./SwipeCreateNestedManyWithoutUserProfilesInput";

export type UserProfileCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  photos?: InputJsonValue;
  bio?: string | null;
  age?: number | null;
  gender?: string | null;
  location?: string | null;
  swipes?: SwipeCreateNestedManyWithoutUserProfilesInput;
};
