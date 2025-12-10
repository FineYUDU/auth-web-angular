export interface LoginUser {
  email:    string;
  password: string;
}

export interface LoginResp {
  id:        string;
  email:     string;
  firstName: string;
  lastName:  string;
  token:     string;
}