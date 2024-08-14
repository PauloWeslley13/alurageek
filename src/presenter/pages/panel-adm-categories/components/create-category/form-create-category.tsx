import Button from "@mui/material/Button";
import { InputField } from "@/presenter/components/ui";
import { useCreateCategory } from "./hook";
import * as S from "./styles";

export function FormCreateCategory() {
  const { errors, handleSubmit, handlerCreateCategory, register } =
    useCreateCategory();

  return (
    <S.FormCategoryContainer>
      <form onSubmit={handleSubmit(handlerCreateCategory)}>
        <InputField
          {...register("name")}
          id="name"
          type="text"
          label="Categoria"
          placeholder="Informe a categoria"
          error={!!errors.name?.message}
          helperText={errors.name?.message}
          sx={{ width: "100%" }}
        />

        <Button
          variant="primary"
          type="submit"
          sx={{
            alignSelf: "center",
            width: 320,
            height: (theme) => theme.spacing(12),
          }}
        >
          Cadastrar
        </Button>
      </form>
    </S.FormCategoryContainer>
  );
}
