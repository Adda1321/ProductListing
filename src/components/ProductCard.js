import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CustomButton from '../shared/CustomButton';

const ProductCard = ({ product, onPress }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <CustomButton title="View Details" onPress={() => onPress(product)} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal:5,
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
  price: {
    fontSize: 16,
    color: '#888',
    marginVertical: 10,
  },
});

export default ProductCard;
