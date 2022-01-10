export type ProfileModel = {
  id: number;
  userName: string;
  password: string;
};

export type AddProfileModel = Omit<ProfileModel, "id">;
