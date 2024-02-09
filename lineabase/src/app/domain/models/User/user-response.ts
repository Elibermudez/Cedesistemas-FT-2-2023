import { User } from "./user";

export class UserInResponse extends User{
  type!: string;
  status!: string;
  isRemoved!: boolean;
  _id!: string;
  createdAt!: string;
  updatedAt!: string
}

export class UserResponse {
  user!:UserInResponse;
}
