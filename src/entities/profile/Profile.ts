export type ProfileModel = {
  id: number;
  type: number;
};

export type AddProfileModel = Omit<ProfileModel, "id">;
