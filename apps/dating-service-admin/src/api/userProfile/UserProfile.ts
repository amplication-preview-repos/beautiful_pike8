import { JsonValue } from "type-fest";
import { Swipe } from "../swipe/Swipe";

export type UserProfile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  photos: JsonValue;
  bio: string | null;
  age: number | null;
  gender: string | null;
  location: string | null;
  swipes?: Array<Swipe>;
};
