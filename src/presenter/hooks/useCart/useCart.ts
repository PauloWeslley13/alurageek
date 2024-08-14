import { useMemo } from "react";
import { ProductsCart } from "@/presenter/components/types";
import { useAppDispatch, useAppSelector } from "@/main/store/hook/useRedux";
import {
  handleQuantity,
  removeToCart,
  resetCart,
} from "@/main/store/ducks/cart";

export function useCart() {
  const { user } = useAppSelector((state) => state.authentication);
  const { products } = useAppSelector((state) => state.products);
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const { itemCarts, loadCalcTotal } = useMemo(() => {
    let totalPrice = 0;

    const cartReducer = cart.reduce((items, itemCart) => {
      const item = products.find((item) => item.id === itemCart.id);
      totalPrice += Number(item?.price) * itemCart.quantity;

      if (item) {
        items.push({ id: item.id, quantity: itemCart.quantity });
      }

      return items;
    }, [] as ProductsCart[]);

    return { itemCarts: cartReducer, loadCalcTotal: totalPrice };
  }, [cart, products]);

  const { loadCartProducts } = useMemo(() => {
    const loadCartProducts = itemCarts.map((props) => {
      const [productCart] = products.filter(
        (product) => product.id === props.id,
      );

      return {
        ...productCart,
        id: props.id,
        quantity: props.quantity,
      };
    });

    return { loadCartProducts };
  }, [itemCarts, products]);

  function handlerDecrementQuantity(id: string, quantity: number) {
    return quantity >= 1 && dispatch(handleQuantity({ id, quantity: -1 }));
  }

  function handlerIncrementQuantity(id: string) {
    dispatch(handleQuantity({ id, quantity: +1 }));
  }

  function handleDeleteItemCart(id: string) {
    dispatch(removeToCart({ id }));
  }

  function handleCheckout() {
    dispatch(resetCart());
  }

  return {
    user,
    loadCalcTotal,
    loadCartProducts,
    handleCheckout,
    handleDeleteItemCart,
    handlerIncrementQuantity,
    handlerDecrementQuantity,
  };
}
