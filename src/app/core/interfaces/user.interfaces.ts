export interface User {
  id:string;
  email:string;
  firstName:string;
  lastName:string;
  isActive:boolean;
  role:string;
}
export interface LoginUser {
  email:string;
  password:string;
}