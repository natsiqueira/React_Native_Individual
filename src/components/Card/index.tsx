import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

interface CardProps {
  title: string;
  description: string;
  imageSource: ImageSourcePropType; 
}

const styles = StyleSheet.create({
  card: {
    width: 130,
    marginRight: 16,
  },
  cardImage: {
    width: 130,
    height: 130,
    backgroundColor: '#303030',
    borderRadius: 4, 
    marginBottom: 8,
  },
  cardTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardDescription: {
    color: '#B3B3B3',
    fontSize: 12,
  },
});

export const Card: React.FC<CardProps> = ({ title, description, imageSource }) => (
  <View style={styles.card}>
    <Image 
      source={imageSource} 
      style={styles.cardImage} 
      resizeMode="cover"
      accessibilityLabel={`Capa da playlist ${title}`}
    />
    
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
  </View>
);