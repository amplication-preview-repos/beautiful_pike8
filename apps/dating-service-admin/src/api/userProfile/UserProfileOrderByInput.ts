import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  photos?: SortOrder;
  bio?: SortOrder;
  age?: SortOrder;
  gender?: SortOrder;
  location?: SortOrder;
};
