export enum UserSex {
  Male = "male",
  Female = "female",
}

export type User = { sex: UserSex; name: string; _id?: string };

export type Option = Omit<User, "id">;

export type Options = Option[];
