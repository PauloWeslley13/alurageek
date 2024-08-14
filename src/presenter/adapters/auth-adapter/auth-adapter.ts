import { Errors } from "@/domain/errors";
import { UserUseCase } from "@/domain/user";

type AuthenticationAdapterTypes = {
  makeUserAuth: UserUseCase;
  makeEmailInUseError: Errors.EmailInUseError;
  makeUnexpectedError: Errors.UnexpectedError;
};

export const makeAuthenticationAdapter = (): AuthenticationAdapterTypes => {
  const makeUserAuth = new UserUseCase();
  const makeEmailInUseError = new Errors.EmailInUseError();
  const makeUnexpectedError = new Errors.UnexpectedError();

  return {
    makeUserAuth,
    makeEmailInUseError,
    makeUnexpectedError,
  };
};
