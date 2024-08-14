import { IUserRepo, UserRepo } from "@/database/user";

export namespace UserRepoFactory {
  export class Create {
    add(params: IUserRepo.Model): IUserRepo {
      return new UserRepo(params);
    }
  }
}
