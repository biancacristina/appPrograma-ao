import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Input, Button, Text } from 'react-native-elements';

const Stack = createStackNavigator();

function Telalogin({ navigation }) {  // Nome do componente em PascalCase
  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>Login</Text>

      <Input
        placeholder='Email'
        leftIcon={{ type: 'material', name: 'email' }}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <Input
        placeholder='Senha'  // Capitalizado para consistência
        leftIcon={{ type: 'material', name: 'lock' }}
        secureTextEntry
      />
      <Button
        title="Entrar"  // Capitalizado para consistência
        buttonStyle={styles.button}
        onPress={() => alert('Login feito')}
      />
      <Button
        title="Cadastrar"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Cadastrar')}
      />
      <Button
        title="Esqueceu a senha"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('RecSenha')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function Cadastrar({ navigation }) {
  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>Cadastrar</Text>
      <Input
        placeholder='Email'
        leftIcon={{ type: 'material', name: 'email' }}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <Input
        placeholder='Senha'  // Capitalizado para consistência
        leftIcon={{ type: 'material', name: 'lock' }}
        secureTextEntry
      />
      <Input
        placeholder='Confirmar Senha'  // Adicionado campo de confirmação
        leftIcon={{ type: 'material', name: 'lock' }}
        secureTextEntry
      />
      <Button
        title="Cadastrar-se"  // Texto mais claro
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Telalogin')}  // Nome consistente
      />
      <StatusBar style="auto" />
    </View>
  );
}

function RecSenha({ navigation }) {
  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>Recuperar Senha</Text>
      <Input
        placeholder='Email'
        leftIcon={{ type: 'material', name: 'email' }}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <Button
        title="Enviar link de recuperação"  // Ação mais clara
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Telalogin')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Telalogin">
        <Stack.Screen name="Telalogin" component={Telalogin} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="RecSenha" component={RecSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 30,
  },
  button: {
    width: 200,
    marginTop: 10,
    marginBottom: 10,
  },
});