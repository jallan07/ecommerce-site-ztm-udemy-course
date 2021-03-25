// look inside existing cartItems to check if the cartItem added already exists
export const addItemToCart = (cartItems, cartItemToAdd) => {
  // if below finds a match it will return true, else it will come back undefined
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // video 124
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : { cartItem }
    );
  }

  // if the above doesn't apply, then set the cartItems to the cartItemToAdd and set its quantity to 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
