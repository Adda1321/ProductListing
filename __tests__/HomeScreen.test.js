import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';
import {CartContext} from '../src/context/CartContext';

const mockCartContext = {
  cart: [],
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
  clearCart: jest.fn(),
};

describe('HomeScreen', () => {
  it('should add a product and display it on the HomeScreen', async () => {
    const {getByText, getByPlaceholderText, queryByText} = render(
      <CartContext.Provider value={mockCartContext}>
        <HomeScreen />
      </CartContext.Provider>
    );

    // Open the Add Product Modal
    fireEvent.press(getByText('Add Product'));

    // Fill out the form in the modal
    fireEvent.changeText(getByPlaceholderText('Product Name'), 'Test Product');
    fireEvent.changeText(getByPlaceholderText('Product Price'), '10.99');

    // Save the product
    fireEvent.press(getByText('Save Product'));

    // Wait for the modal to close and the product to be added
    await waitFor(() => {
      expect(queryByText('Test Product')).toBeTruthy();
    });
  });
});
