import { z } from "zod";

export const schemaProduct = z.object({
  name: z.string().min(1, { message: "Informe o nome do produto" }),
  description: z.string().min(1, { message: "Informe a descrição do produto" }),
  price: z.string().min(1, { message: "Informe o preço do produto" }),
  categoryId: z.string().min(1, { message: "Informe a categoria do produto" }),
  imageUrl: z.string().optional(),
});
