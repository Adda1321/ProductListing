import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import CustomButton from '../shared/CustomButton';
import Card from '../shared/Card';

const ProductCard = ({product, onPress}) => {
  return (
    <Card>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <CustomButton title="View Details" onPress={() => onPress(product)} />
    </Card>
  );
};

const styles = StyleSheet.create({
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
