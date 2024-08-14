import { useNavigate } from "react-router-dom";

export function useCardProduct() {
  const navigate = useNavigate();

  const handlerNavProductDetail = (productId: string) => {
    return navigate(`/product-detail/${productId}`);
  };

  return { handlerNavProductDetail };
}
