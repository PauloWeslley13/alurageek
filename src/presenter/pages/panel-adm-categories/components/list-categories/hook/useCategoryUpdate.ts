import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormCategoryProps } from "@/presenter/pages/panel-adm-categories/types";
import { useAppDispatch } from "@/main/store/hook/useRedux";
import { loadUpdateCategory } from "@/main/store/ducks/category";
import { schemaCategory } from "@/validation";

type UseCategoryUpdateProps = {
  categoryId: string;
};

export function useCategoryUpdate({ categoryId }: UseCategoryUpdateProps) {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormCategoryProps>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schemaCategory),
  });

  function actionUpdatedCategory(params: FormCategoryProps) {
    const body = {
      id: categoryId,
      name: params.name,
    };

    dispatch(loadUpdateCategory({ body }));
  }

  function handlerCategoryUpdated() {
    handleSubmit(actionUpdatedCategory)();
  }

  return { errors, register, handlerCategoryUpdated };
}
