import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormCategoryProps } from "@/presenter/pages/panel-adm-categories/types";
import { schemaCategory } from "@/validation";
import { useAppDispatch } from "@/main/store/hook/useRedux";
import { loadCreateCategory } from "@/main/store/ducks/category";

export function useCreateCategory() {
  const dispatch = useAppDispatch();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormCategoryProps>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schemaCategory),
  });

  function handlerCreateCategory(data: FormCategoryProps) {
    dispatch(loadCreateCategory({ body: data }));
    reset();
  }

  return {
    errors,
    register,
    handleSubmit,
    handlerCreateCategory,
  };
}
