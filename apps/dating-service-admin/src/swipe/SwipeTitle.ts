import { Swipe as TSwipe } from "../api/swipe/Swipe";

export const SWIPE_TITLE_FIELD = "id";

export const SwipeTitle = (record: TSwipe): string => {
  return record.id?.toString() || String(record.id);
};
