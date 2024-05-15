import React, {useContext} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {CartContext} from '../context/CartContext';

const CartScreen = () => {
  const {cart} = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cart</Text>
      {/* FlatList to display cart items (item's name , item's quantity) */}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    padding: 20,
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
  },
  quantity: {
    fontSize: 16,
    color: '#888',
    marginTop: 10,
  },
});

export default CartScreen;
