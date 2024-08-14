import { useAppSelector } from "@/main/store/hook/useRedux";
import { useProductsFilter } from "@/presenter/hooks/useProductsFilter";
import { ProductsList } from "@/presenter/components/layout";

function ProductListItems() {
  const { isLoading } = useAppSelector((state) => state.products);
  const { productsFilter } = useProductsFilter();

  return (
    <ProductsList
      title="Todos produtos"
      products={productsFilter}
      isLoading={isLoading}
    />
  );
}

export default ProductListItems;
