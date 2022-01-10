export type UserEntity = {
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
  userName: string;
  password: string;
};

export type AddUserEntity = Omit<UserEntity, "id">;
