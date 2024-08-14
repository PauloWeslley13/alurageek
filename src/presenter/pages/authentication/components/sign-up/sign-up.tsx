import { FC } from "react";
import Button from "@mui/material/Button";
import { Alert, InputField } from "@/presenter/components/ui";
import { useSignUp } from "./hook";

export const SignUp: FC = () => {
  const { errors, register, handleSubmit, handlerSignUp, isValidInputs } =
    useSignUp();

  return (
    <form onSubmit={handleSubmit(handlerSignUp)} autoComplete="off">
      <InputField
        {...register("username")}
        type="text"
        label="Username"
        placeholder="Informe o usuário"
        error={!!errors.username?.message}
        helperText={errors.username?.message}
      />
      <InputField
        {...register("email")}
        type="text"
        label="Email"
        placeholder="Informe o usuário"
        error={!!errors.email?.message}
        helperText={errors.email?.message}
      />
      <InputField
        {...register("password")}
        type="password"
        label="Senha"
        placeholder="Informe a senha"
        error={!!errors.password?.message}
        helperText={errors.password?.message}
      />
      <InputField
        {...register("photoUrl")}
        type="text"
        label="Foto"
        placeholder="Informe a url da foto"
        error={!!errors.photoUrl?.message}
        helperText={errors.photoUrl?.message}
      />

      <Button variant="primary" type="submit">
        Cadastrar
      </Button>

      {isValidInputs() && (
        <Alert
          message="Campos preenchido incorretamente"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        />
      )}
    </form>
  );
};
