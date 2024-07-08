import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  toUser?: SortOrder;
  messageBody?: SortOrder;
  timestamp?: SortOrder;
  fromUser?: SortOrder;
};
