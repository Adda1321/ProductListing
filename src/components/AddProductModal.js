import React, {useState} from 'react';
import {Modal, View, TextInput, StyleSheet} from 'react-native';
import CustomButton from '../shared/CustomButton';
import colors from '../theme/colors';

const AddProductModal = ({visible, onClose, onAddProduct}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handleAddProduct = () => {
    onAddProduct({id: Date.now(), name, price: parseFloat(price)});
    setName('');
    setPrice('');
    onClose();
  };

  return (
    <Modal
      style={{}}
      visible={visible}
      animationType="slide"
      transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            placeholder="Product Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TextInput
            placeholder="Product Price"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            style={styles.input}
          />
          <View
            style={{
              marginVertical: 20,
            }}>
            <CustomButton
              disabled={name ? false : true}
              title="Save Product"
              onPress={handleAddProduct}
              color={colors.primary_dark}
            />
          </View>
          <CustomButton title="Cancel" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    justifyContent: 'center',
    width: '80%',
    minHeight: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default AddProductModal;
