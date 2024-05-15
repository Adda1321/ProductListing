import {StyleSheet, Text, Button, View} from 'react-native';
import React from 'react';
import colors from '../theme/colors';

const CustomButton = ({title, onPress, color = colors.primary, style = {}}) => {
  return (
    <View style={style}>
      <Button 
      color={color} title={title} onPress={onPress} />
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
