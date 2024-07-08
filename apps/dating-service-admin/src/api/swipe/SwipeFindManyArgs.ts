import { SwipeWhereInput } from "./SwipeWhereInput";
import { SwipeOrderByInput } from "./SwipeOrderByInput";

export type SwipeFindManyArgs = {
  where?: SwipeWhereInput;
  orderBy?: Array<SwipeOrderByInput>;
  skip?: number;
  take?: number;
};
