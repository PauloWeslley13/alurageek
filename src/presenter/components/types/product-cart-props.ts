import { ProductModel } from "@/domain/models";

export type CartProductProps = Omit<ProductModel, "id"> & {
  id: string;
  quantity: number;
};
