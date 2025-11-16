import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
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
    marginBottom: 20,
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

  const handleLogout = () => {
    navigation.replace('Login'); 
  }

  return (
    <View style={styles.container}>
      <HomeHeader />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <Text style={styles.sectionTitle}>Tocados recentemente</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <Card 
            title="Daily Mix 1" 
            description="Apenas para você" 
            imageSource={DailyMixImage} 
          />
          <Card 
            title="Hip Hop Revoada" 
            description="Playlist da Comunidade" 
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