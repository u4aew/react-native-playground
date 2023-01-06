export type Message = {
  id: string;
  user: {
    id: string;
    name: string;
  };
  isAdmin: boolean;
  date: Date;
  text: string;
  read: boolean;
}
