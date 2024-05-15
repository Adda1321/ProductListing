import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {CartContext} from '../context/CartContext';

const ProductDetailsScreen = ({route, navigation}) => {
  // Destructure product from route parameters
  const {product} = route.params;
  const {addToCart} = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      {/* Button to add product to the cart */}
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
      {/* Button to navigate to the cart screen */}
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: '#888',
    marginVertical: 20,
  },
});

export default ProductDetailsScreen;
