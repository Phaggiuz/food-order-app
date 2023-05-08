import CartContext from "./cart-context";

const CartProcider = (props) => {
  const addItemtoCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemtoCartHandler,
    rmoveItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProcider;
