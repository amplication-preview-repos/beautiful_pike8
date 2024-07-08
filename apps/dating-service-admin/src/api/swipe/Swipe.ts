import { UserProfile } from "../userProfile/UserProfile";

export type Swipe = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  direction?: "Option1" | null;
  userProfile?: UserProfile | null;
};
