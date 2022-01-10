import { AddUserModel, UserModel } from "../../models/usecase/User";

export interface UserRepository {
  add: (user: AddUserModel) => Promise<UserModel>;
  edit: (id: number) => Promise<AddUserModel>;
  list: () => Promise<UserModel[]>;
  deleteById: (id: number) => Promise<void>;
  findById: (id: number) => Promise<UserModel>;
  findByCriteria: (criteria: Object) => Promise<UserModel[] | []>;
}
