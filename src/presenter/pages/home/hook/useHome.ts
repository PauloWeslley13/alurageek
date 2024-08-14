import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/main/store/hook/useRedux";
import { toasts } from "@/presenter/components/ui";
import { useCategoryList } from "@/presenter/hooks/useCategoryList";

export function useHome() {
  const [hasMore, setHasMore] = useState(3);
  const { products } = useAppSelector((state) => state.products);
  const { categories, isLoading } = useCategoryList();
  const search = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoading) {
      toasts.loader({ title: "Carregando Categorias" });
    }
  }, [isLoading, dispatch]);

  const searchingProducts = useMemo(() => {
    const regexp = new RegExp(search, "i");
    return regexp
      ? categories.map((category) => {
          const prodByCategory = products.filter((product) => {
            return (
              product.categoryId === category.id && product.name.match(regexp)
            );
          });

          return {
            ...category,
            products: regexp ? prodByCategory : [],
          };
        })
      : categories;
  }, [search, categories, products]);

  const loadSearchingCategories = searchingProducts.slice(0, hasMore);

  function loadMoreProducts() {
    if (loadSearchingCategories.length >= 3) {
      setHasMore(5);
    }
  }

  return {
    loadSearchingCategories,
    categories,
    isLoading,
    hasMore,
    loadMoreProducts,
    searchingProducts,
  };
}
