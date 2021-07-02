export interface User {
  id: string;
  name: string;
  avatar: string;
  description: string;
  friends?: User[];
}