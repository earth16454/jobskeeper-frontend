export interface RegisterFormInterface {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginFormInterface {
  email: string;
  password: string;
  remember: boolean;
}