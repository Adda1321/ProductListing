import React, {useContext, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
import {CartContext} from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import AddProductModal from '../components/AddProductModal';
import initialProducts from '../data/products';
import CustomButton from '../shared/CustomButton';
import colors from '../theme/colors';
import { calculateTotalQuantity } from '../helper/calculateTotalQuantity';

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
      <View style={styles.headingContainer}>
        <Text style={styles.header}>Products</Text>
        {/* Button to open the AddProductModal */}
        <View style={styles.addButton}>
          <CustomButton
            color={colors.primary_dark}
            title="Add Product"
            onPress={() => setIsModalVisible(true)}
          />
        </View>
      </View>

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
      <CustomButton
        style={styles.cartContainer}
        color={colors.primary_dark}
        title={`View Cart (${calculateTotalQuantity(cart)})`}
        onPress={() => navigation.navigate('Cart')}
      />
      {/* Modal to add a new product */}
      <View>
        <AddProductModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          onAddProduct={addProduct}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_screen,

    padding: 20,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    marginRight: 10,
  },

  cartContainer: {
    marginTop: 10,
  },
});

export default HomeScreen;
