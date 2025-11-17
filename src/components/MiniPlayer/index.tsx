import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 85,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#303030', 
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#101010',
    elevation: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  albumArt: {
    width: 40,
    height: 40,
    backgroundColor: '#1DB954',
    marginRight: 10,
    borderRadius: 4,
  },
  infoContainer: {
    flex: 1,
  },
  songTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  artistName: {
    color: '#B3B3B3',
    fontSize: 12,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButton: {
    padding: 10,
  },
});

export const MiniPlayer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.albumArt} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.songTitle} numberOfLines={1}>Sinais</Text>
        <Text style={styles.artistName} numberOfLines={1}>Sorriso Maroto</Text>
      </View>
      
      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="heart-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="play-circle-sharp" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};