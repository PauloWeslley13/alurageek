import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  schemaSignIn,
  SignInProps,
} from "@/presenter/pages/authentication/components/sign-in/types";
import { useAppDispatch } from "@/main/store/hook/useRedux";
import { loadAuth } from "@/main/store/ducks/auth";
import { useAuthentication } from "@/presenter/pages/authentication/hook";

export function useSignIn() {
  const { handlerNavHome } = useAuthentication();
  const dispatch = useAppDispatch();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInProps>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schemaSignIn),
  });

  useEffect(() => {
    handlerNavHome();
  }, [handlerNavHome]);

  function isValidInputSignIn() {
    return errors.email?.message && errors.password?.message;
  }

  function handlerSignIn(data: SignInProps) {
    dispatch(loadAuth(data));
    reset();
  }

  return {
    errors,
    register,
    handleSubmit,
    handlerSignIn,
    isValidInputSignIn,
  };
}
