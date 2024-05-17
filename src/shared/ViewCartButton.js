import {StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {calculateTotalQuantity} from '../helper/calculateTotalQuantity';
import {CartContext} from '../context/CartContext';
import colors from '../theme/colors';
import CustomButton from './CustomButton';
const ViewCartButton = ({navigation}) => {
  const {cart} = useContext(CartContext);

  return (
    <>
      {/* CustomButton component to navigate to the cart screen */}
      <CustomButton
        id="total-count"
        styles={styles.cartButton}
        color={colors.primary_dark}
        title={`View Cart (${calculateTotalQuantity(cart)})`}
        onPress={() => navigation.navigate('Cart')}
      />
    </>
  );
};

export default ViewCartButton;

const styles = StyleSheet.create({
  cartButton: {
    marginBototm: 10,
  },
});
