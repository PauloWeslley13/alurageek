import { AccountModel } from "@/domain/models";

export namespace IUserRepo {
  export type Model = AccountModel;
}

export interface IUserRepo {
  user: IUserRepo.Model;
}
