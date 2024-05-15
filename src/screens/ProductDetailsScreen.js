import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {CartContext} from '../context/CartContext';
import {calculateTotalQuantity} from '../helper/calculateTotalQuantity';
import CustomButton from '../shared/CustomButton';
import colors from '../theme/colors';
const ProductDetailsScreen = ({route, navigation}) => {
  // Destructure product from route parameters
  const {product} = route.params;
  const {addToCart, cart} = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <View>
        {/* CustomButton component with custom styles for adding product to cart */}
        <CustomButton
          title="Add to Cart"
          onPress={() => addToCart(product)}
          style={styles.addButton}
        />

        {/* CustomButton component to navigate to the cart screen */}
        <CustomButton
          color={colors.primary_dark}
          title={`View Cart (${calculateTotalQuantity(cart)})`}
          onPress={() => navigation.navigate('Cart')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.background_screen,
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
  addButton: {
    marginBottom: 10,
  },
});

export default ProductDetailsScreen;
