import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
  },
  scrollContent: {
    paddingTop: 50,
    paddingBottom: 100, 
    paddingHorizontal: 15,
  },
  welcomeText: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  card: {
    width: width * 0.35,
    marginRight: 15,
  },
  cardImagePlaceholder: {
    width: '100%',
    aspectRatio: 1, 
    backgroundColor: '#1E1E1E', 
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  cardDescription: {
    color: '#B3B3B3',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 2,
  },
  logoutButton: {
    marginTop: 40,
    backgroundColor: '#1DB954',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignSelf: 'center',
  },
  logoutButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});