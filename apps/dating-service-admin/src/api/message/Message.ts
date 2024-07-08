export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  toUser: string | null;
  messageBody: string | null;
  timestamp: Date | null;
  fromUser: string | null;
};
