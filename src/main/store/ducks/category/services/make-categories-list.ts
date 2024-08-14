import { CategoryModel } from "@/domain/models";
import { makeRemoteCategoryList } from "@/main/factories/usecases";

export async function makeCategoryList(): Promise<CategoryModel[]> {
  const category = makeRemoteCategoryList();
  const response = await category.getCategoryList();
  return response;
}
