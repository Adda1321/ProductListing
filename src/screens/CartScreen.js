import React, {useContext} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {CartContext} from '../context/CartContext';
import colors from '../theme/colors';
import Card from '../shared/Card';
import {calculateTotalQuantity} from '../helper/calculateTotalQuantity';
import {calculateTotalAmount} from '../helper/calculateTotalAmount';
const CartScreen = () => {
  const {cart} = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cart</Text>
      <Text style={{color: colors.primary_dark}}>
        Total: ${calculateTotalAmount(cart)}
      </Text>
      {/* FlatList to display cart items (item's name , item's quantity) */}
      {cart.length ? (
        <FlatList
          data={cart}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Card>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
            </Card>
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
