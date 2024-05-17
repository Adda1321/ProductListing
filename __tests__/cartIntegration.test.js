import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {CartProvider} from '../src/context/CartContext';
import ProductDetailsScreen from '../src/screens/ProductDetailsScreen';

// Mock product data
const mockProduct = {
  id: 1,
  name: 'Test Product',
  price: 99.99,
};

// Mock navigation
const mockNavigation = {
  navigate: jest.fn(),
};

describe('ProductDetailsScreen and ViewCartButton Integration Test', () => {
  it('should add product to cart and update the cart quantity', async () => {
    const {getByText, getByTestId} = render(
      <CartProvider>
        <ProductDetailsScreen route={{params: {product: mockProduct}}} navigation={mockNavigation} />
      </CartProvider>
    );

    // Verify initial cart quantity
    expect(getByText('View Cart (0)')).toBeTruthy();

    // Add product to cart
    const addToCartButton = getByText('Add to Cart');
    fireEvent.press(addToCartButton);

    // Wait for the ViewCartButton to update
    await waitFor(() => {
      expect(getByText('View Cart (1)')).toBeTruthy();
    });

    // Add product to cart again to verify increment
    fireEvent.press(addToCartButton);

    // Wait for the ViewCartButton to update again
    await waitFor(() => {
      expect(getByText('View Cart (2)')).toBeTruthy();
    });
  });
});
