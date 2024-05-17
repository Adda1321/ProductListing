import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import ProductDetailsScreen from '../src/screens/ProductDetailsScreen';
import {CartContext} from '../src/context/CartContext';
const mockProduct = {
    id: 1,
    name: 'Test Product',
    price: 10.99,
  };
const mockCartContext = {
  cart: [],
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
  clearCart: jest.fn(),
};

describe('ProductDetailsScreen', () => {
  it('should add product to cart when Add To Cart button is clicked', async () => {
    const {getByTestId} = render(
      <CartContext.Provider value={mockCartContext}>
        <ProductDetailsScreen route={{params: {product: mockProduct}}} />
      </CartContext.Provider>
    );

    // Find and press the "Add To Cart" button
    fireEvent.press(getByTestId('add-to-cart-button'));

    // Wait for the product to be added to the cart
    await waitFor(() => {
      expect(mockCartContext.addToCart).toHaveBeenCalledWith(mockProduct);
    });
  });
});
