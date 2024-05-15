import React, {useContext, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
import {CartContext} from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import AddProductModal from '../components/AddProductModal';
import initialProducts from '../data/products';

const HomeScreen = ({navigation}) => {
  // using the cart from the context directly
  const {cart} = useContext(CartContext);
  const [products, setProducts] = useState(initialProducts);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addProduct = newProduct => {
    setProducts(prevProducts => [...prevProducts, newProduct]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Products</Text>
      {/* Displaying the list of products */}
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate('ProductDetails', {product: item})
            }
          />
        )}
      />
      {/* Button to navigate to the cart screen */}
      <View style={styles.cartContainer}>
        <Button
          title={`Cart (${cart.length})`}
          onPress={() => navigation.navigate('Cart')}
        />
      </View>
      {/* Button to open the AddProductModal */}
      <View style={styles.addButton}>
        <Button title="Add Product" onPress={() => setIsModalVisible(true)} />
      </View>
      {/* Modal to add a new product */}
      <AddProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAddProduct={addProduct}
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
  cartContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  addButton: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default HomeScreen;
