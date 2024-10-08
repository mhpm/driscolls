export interface User {
  id?: string | number;
  first_name: string;
  last_name: string;
  email: string;
  role?: string;
  avatar?: string;
  password?: string;
}
