import { useMemo } from "react";
import { CategoryModel } from "@/domain/models";
import { useAppSelector } from "@/main/store/hook/useRedux";

type UseCategoryListItemProps = {
  category: CategoryModel;
};

export function useCategoryListItem({ category }: UseCategoryListItemProps) {
  const { categories } = useAppSelector((state) => state.categories);

  const { hasCategoryItem } = useMemo(() => {
    const hasCategoryItem =
      categories.length > 0 &&
      categories.some((props) => props.id === category.id);

    return { hasCategoryItem };
  }, [categories, category.id]);

  return { hasCategoryItem };
}
