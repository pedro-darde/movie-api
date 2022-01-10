import { AddUserEntity, UserEntity } from "../entities/user/user-data";

export interface UserRepository {
  add: (user: AddUserEntity) => Promise<UserEntity>;
  edit: (id: number) => Promise<UserEntity>;
  list: () => Promise<UserEntity[]>;
  deleteById: (id: number) => Promise<void>;
  findById: (id: number) => Promise<UserEntity>;
  findByCriteria: (criteria: Object) => Promise<UserEntity[] | []>;
}
