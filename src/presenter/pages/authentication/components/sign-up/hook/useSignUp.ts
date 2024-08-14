import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@/main/store/hook/useRedux";
import { loadAddAccount } from "@/main/store/ducks/add-account";
import { useAuthentication } from "@/presenter/pages/authentication/hook";
import {
  schemaSignUp,
  SignUpProps,
} from "@/presenter/pages/authentication/components/sign-up/types";

export function useSignUp() {
  const { handlerNavHome } = useAuthentication();
  const dispatch = useAppDispatch();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProps>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schemaSignUp),
  });

  useEffect(() => {
    handlerNavHome();
  }, [handlerNavHome]);

  function isValidInputs() {
    return (
      errors.email?.message &&
      errors.password?.message &&
      errors.username?.message &&
      errors.photoUrl?.message
    );
  }

  function handlerSignUp(data: SignUpProps) {
    dispatch(loadAddAccount(data));
    reset();
  }

  return {
    errors,
    register,
    handlerSignUp,
    handleSubmit,
    isValidInputs,
  };
}
