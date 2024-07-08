import { SortOrder } from "../../util/SortOrder";

export type MatchOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  matchDate?: SortOrder;
  userProfile1?: SortOrder;
  userProfile2?: SortOrder;
};
