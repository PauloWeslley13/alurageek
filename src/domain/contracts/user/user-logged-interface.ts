import { AccountModel } from "@/domain/models";

export namespace IUserLogged {
  export type Params = {
    userId: string;
  };

  export type Model = AccountModel;
}

export interface IUserLogged {
  getUserLogged(params: IUserLogged.Params): Promise<IUserLogged.Model>;
}
