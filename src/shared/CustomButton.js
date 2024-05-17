import {StyleSheet, Text, Button, View} from 'react-native';
import React from 'react';
import colors from '../theme/colors';

const CustomButton = ({id,title, onPress, color = colors.primary, style = {} , disabled=false}) => {
  return (
    <View style={style}>
      <Button 
      testID={id}
      disabled={disabled}
      color={color} title={title} onPress={onPress} />
    </View>
  );
};

export default CustomButton;