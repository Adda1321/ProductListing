import React, {useContext} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {CartContext} from '../context/CartContext';
import colors from '../theme/colors';

const CartScreen = () => {
  const {cart} = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cart</Text>
      {/* FlatList to display cart items (item's name , item's quantity) */}
      {cart.length ? (
        <FlatList
          data={cart}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.cartItem}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
            </View>
          )}
        />
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={{fontSize: 20}}>Cart is empty</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background_screen,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    padding: 20,
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary_dark,

  },
  quantity: {
    fontSize: 16,
    color: '#888',
    marginTop: 10,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CartScreen;
