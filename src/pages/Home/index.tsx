import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card } from '../../components/Card';
import { RootStackParamList } from '../../routers';

const DailyMixImage = require('../../assets/images/daily_mix_1.jpg');
const HipHopImage = require('../../assets/images/hip_hop_revoada.jpg');
const RelaxChillImage = require('../../assets/images/relax_chill.jpg');
const FavoritasImage = require('../../assets/images/minhas_favoritas.jpg');
const PodcastImage = require('../../assets/images/podcast_do_dia.jpg');
const DescobrirImage = require('../../assets/images/descobrir.jpg');
const TreinoImage = require('../../assets/images/treino.jpg');

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'TabRoutes' 
>;
const filters = ['Música', 'Podcasts & Programas', 'Novidades', 'Chill', 'Treino'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    paddingTop: 50, 
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 100, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  welcomeTextHeader: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconGroup: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 20,
  },

  filterBar: {
    paddingHorizontal: 16,
    marginBottom: 20,
    marginTop: 10,
  },
  filterPill: {
    backgroundColor: '#282828',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 50,
    marginRight: 8,
  },
  filterPillActive: {
    backgroundColor: '#FFF', 
  },
  filterText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  filterTextActive: {
    color: '#000',
  },

  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  horizontalScroll: {

  },
  logoutButton: {
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: '#1DB954', 
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const HomeHeader = () => (
  <View style={styles.header}>
    <Text style={styles.welcomeTextHeader}>Boa noite</Text>
    
    <View style={styles.iconGroup}>

      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="notifications-outline" size={24} color="white" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="time-outline" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="settings-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  </View>
);

export const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [activeFilter, setActiveFilter] = useState(filters[0]); 

  const handleLogout = () => {
    navigation.replace('Login'); 
  }

  return (
    <View style={styles.container}>
      <HomeHeader />

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.filterBar}
      >
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterPill, 
                isActive && styles.filterPillActive 
              ]}
              onPress={() => setActiveFilter(filter)}
              activeOpacity={0.7}
            >
              <Text style={[
                styles.filterText, 
                isActive && styles.filterTextActive
              ]}>
                {filter}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {activeFilter === 'Música' && (
          <>
            <Text style={styles.sectionTitle}>Tocados recentemente</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
              <Card 
                title="Ferrugem" 
                description="Apenas para você" 
                imageSource={DailyMixImage} 
              />
              <Card 
                title="Sorriso Maroto" 
                description="Playlist" 
                imageSource={HipHopImage} 
              />
              <Card 
                title="Relax Chill" 
                description="Música para estudar" 
                imageSource={RelaxChillImage} 
              />
              <Card 
                title="Minhas Favoritas" 
                description="Você e mais 3" 
                imageSource={FavoritasImage} 
              />
            </ScrollView>
          </>
        )}

        {activeFilter === 'Podcasts & Programas' && (
          <>
            <Text style={styles.sectionTitle}>Seus Podcasts Ativos</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
              <Card 
                title="Podcast do Dia" 
                description="Histórias incríveis" 
                imageSource={PodcastImage} 
              />
              <Card 
                title="Descobrir" 
                description="Novos programas" 
                imageSource={DescobrirImage} 
              />
            </ScrollView>
          </>
        )}
        
        <Text style={styles.sectionTitle}>Pule o tédio</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <Card 
            title="Podcast do Dia" 
            description="Histórias incríveis" 
            imageSource={PodcastImage} 
          />
          <Card 
            title="Descobrir" 
            description="Músicas novas toda semana" 
            imageSource={DescobrirImage} 
          />
          <Card 
            title="Treino" 
            description="Batidas fortes" 
            imageSource={TreinoImage} 
          />
        </ScrollView>
        
        <TouchableOpacity 
          style={styles.logoutButton} 
          onPress={handleLogout}
        >
          <Text style={styles.logoutButtonText}>LOGOUT (Apenas Simulação)</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};