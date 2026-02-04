// export interface User {
//   id:        string;
//   email:     string;
//   firstName: string;
//   lastName:  string;
// }

export interface RespUser {
  user:  User;
  token: string;
}
export interface User {
  id:              string;
  email:           string;
  firstName:       string;
  lastName:        string;
  roles:           string[];
  profileImageUrl: string;
}
