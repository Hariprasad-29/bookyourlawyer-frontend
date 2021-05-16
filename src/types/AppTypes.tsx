export interface Account {
    token: string;
    user: User;
  }
  
  export type User = {
    id: string;
    name?: string;
    email?: string;
    [key: string]: string;
  };
  