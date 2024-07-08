import { InputJsonValue } from "../../types";
import { SwipeUpdateManyWithoutUserProfilesInput } from "./SwipeUpdateManyWithoutUserProfilesInput";

export type UserProfileUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  photos?: InputJsonValue;
  bio?: string | null;
  age?: number | null;
  gender?: string | null;
  location?: string | null;
  swipes?: SwipeUpdateManyWithoutUserProfilesInput;
};
