import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "toUser";

export const MessageTitle = (record: TMessage): string => {
  return record.toUser?.toString() || String(record.id);
};
