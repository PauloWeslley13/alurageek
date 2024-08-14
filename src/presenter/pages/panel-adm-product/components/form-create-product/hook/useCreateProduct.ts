import { FocusEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProductProps } from "@/presenter/components/types";
import { useAppDispatch, useAppSelector } from "@/main/store/hook/useRedux";
import { loadProductCreate } from "@/main/store/ducks/products";
import { toasts } from "@/presenter/components/ui";
import { schemaProduct } from "@/validation";
import { useFormatted } from "@/presenter/hooks/useFormatted";

export function useCreateProduct() {
  const { fileURL } = useAppSelector((state) => state.upload);
  const { formatted } = useFormatted();
  const dispatch = useAppDispatch();
  const {
    reset,
    control,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProductProps>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schemaProduct),
    defaultValues: {
      name: "",
      categoryId: "",
      price: "",
      description: "",
    },
  });

  function handleFormattedPrice(
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
  ) {
    const priceFormatted = formatted.formatPrice(event.target.value);
    setValue("price", priceFormatted);
  }

  function handlerCreatedProduct(params: FormProductProps) {
    if (!fileURL) {
      return toasts.warn({ title: "Faça upload da image do produto primeiro" });
    }

    const data = {
      ...params,
      price: formatted.formatDecimalValue(params.price),
      imageUrl: fileURL,
    };
    dispatch(loadProductCreate({ body: data }));
    reset();
  }

  return {
    errors,
    control,
    register,
    handleSubmit,
    handlerCreatedProduct,
    handleFormattedPrice,
  };
}
