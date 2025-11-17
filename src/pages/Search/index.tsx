import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  searchText: {
    fontSize: 16,
    marginLeft: 10,

  },

  searchIcon: {
    marginRight: 8,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    height: 100,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    justifyContent: 'flex-end',
    overflow: 'hidden', 
  },
  categoryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});


const categoryNames = [
  'Música',
  'Podcasts',
  'Eventos ao vivo',
  'Feito para você',
  'Próximos lançamentos',
  'Lançamento', 
];

const colors = ['#8D67AB', '#1E3264', '#BA5D07', '#E8115B', '#148A08', '#B4938D'];

export const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Buscar</Text>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="black" style={styles.searchIcon} />
        <TextInput
          placeholder="O que você quer ouvir?"
          placeholderTextColor="#666"
          style={{ flex: 1, fontSize: 16 }}
        />
      </View>

      <Text style={styles.sectionTitle}>Navegar por tudo</Text>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.gridContainer}>
          {categoryNames.map((name, index) => (
            <TouchableOpacity 
              key={name}
              style={[styles.categoryCard, { backgroundColor: colors[index % colors.length] }]}
              activeOpacity={0.7}
            >
              <Text style={styles.categoryText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};