  // Function to calculate total quantity of items in cart
  export const calculateTotalQuantity = (cart) => {
    let totalQuantity = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };