import { CartProductProps } from "@/presenter/components/types";
import { useCart } from "@/presenter/hooks/useCart";

export function useCartItemSidebar({ item }: { item: CartProductProps }) {
  const {
    handlerIncrementQuantity,
    handlerDecrementQuantity,
    handleDeleteItemCart,
  } = useCart();

  function actionIncrementQuantity() {
    handlerIncrementQuantity(item.id);
  }

  function actionDecrementQuantity() {
    handlerDecrementQuantity(item.id, item.quantity);
  }

  function actionDeleteItemCart() {
    handleDeleteItemCart(item.id);
  }

  return {
    actionIncrementQuantity,
    actionDecrementQuantity,
    actionDeleteItemCart,
  };
}
