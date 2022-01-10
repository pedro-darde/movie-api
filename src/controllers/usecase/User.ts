export type UserModel = {
  id: number;
  name: string;
  cellphone: string;
  email: string;
  active: boolean;
  birthDate: string;
  address: string;
  state: number;
  country: number;
  city: number;
  cityName: string;
};

export type AddUserModel = Omit<UserModel, "id">;
