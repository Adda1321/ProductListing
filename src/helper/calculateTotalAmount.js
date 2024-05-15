// Function to calculate total Amount of items in cart
export const calculateTotalAmount = cart => {
  let totalAmount = 0;
  cart.forEach(item => {
    totalAmount = totalAmount + item.price * item.quantity;
  });
  return totalAmount.toFixed(2);
};
