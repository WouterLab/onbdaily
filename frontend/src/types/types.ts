export enum UserSex {
  Male = "male",
  Female = "female",
}

export type User = { sex: UserSex; name: string; id?: string };

export type Options = Omit<User, "id">[];
