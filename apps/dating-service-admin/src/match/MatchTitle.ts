import { Match as TMatch } from "../api/match/Match";

export const MATCH_TITLE_FIELD = "userProfile1";

export const MatchTitle = (record: TMatch): string => {
  return record.userProfile1?.toString() || String(record.id);
};
