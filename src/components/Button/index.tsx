import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './style';
import { ButtonProps } from './type';

type Props = TouchableOpacityProps & ButtonProps;

export function Button({ title, color = 'green', style, ...rest }: Props) {
  const isTextLight = color === 'green' || color === 'white';
  
  return (
    <TouchableOpacity
      style={[styles.button, styles[color], style]} 
      {...rest}
    >
      <Text style={[styles.text, isTextLight ? styles.textLight : styles.textDark]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}