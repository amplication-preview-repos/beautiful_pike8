import { SortOrder } from "../../util/SortOrder";

export type SwipeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  direction?: SortOrder;
  userProfileId?: SortOrder;
};
