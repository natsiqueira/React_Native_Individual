import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';

export const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '100%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    paddingHorizontal: 20,

  },
  green: { backgroundColor: COLORS.primary },
  white: { backgroundColor: COLORS.textLight, borderWidth: 1, borderColor: COLORS.gray },
  transparent: { backgroundColor: 'transparent', borderWidth: 1, borderColor: COLORS.gray },
  
  text: { fontSize: 16, fontWeight: 'bold' },
  textLight: { color: COLORS.textDark }, 
  textDark: { color: COLORS.textLight },
});