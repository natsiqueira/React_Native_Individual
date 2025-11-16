import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../../routers';
import { styles } from './style';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

const SpotifyLogo = require('../../assets/images/spotify.png');


export const Login = () => {

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = () => {
  
    navigation.navigate('TabRoutes'); 
  };

  return (
    <View style={styles.container}>

      <Image
        source={SpotifyLogo} 
        style={styles.logo}
        accessibilityLabel="Logo do Spotify"
      />
      
      <TextInput
        style={styles.input}
        placeholder="E-mail ou nome de usuário"
        placeholderTextColor="#B3B3B3"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#B3B3B3"
        secureTextEntry={true}
      />

      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={handleLogin}
        activeOpacity={0.8}
      >
        <Text style={styles.loginButtonText}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.forgotPasswordButton} 
        onPress={() => console.log('Esqueceu a senha')}
      >
        <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  );
};