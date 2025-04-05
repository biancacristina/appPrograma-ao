import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Alert, View } from 'react-native'; 
import { Avatar, Input } from 'react-native-elements'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export   function Login() { 
  return ( 
   <SafeAreaView style={styles.container}> 
     <Avatar 
     rounded 
     size="xlarge" 
     title="JP"
     source={{
      uri:'https://github.com/account'
     }}
     /> 
     <Input 
     placeholder="Email" 
     leftIcon={<MaterialIcons name="email" size={24} color="black" />} 
     containerStyle={styles.inputContainer} 
     /> 
     <Input 
     placeholder="Senha" 
     leftIcon={<MaterialIcons name="lock" size={24} color="black" />} 
     secureTextEntry 
     containerStyle={styles.inputContainer} 
     /> 
     <TouchableOpacity style={styles.botao_1}> 
     <Text style={styles.texto}>Logar</Text> 
     </TouchableOpacity> 
     <TouchableOpacity style={styles.botao_1}> 
      <Text style={styles.texto}>Cadastrar-se</Text> 
      </TouchableOpacity> 
      <TouchableOpacity> 
        <Text style={styles.texto_senha}>Esqueceu a Senha</Text> 
        </TouchableOpacity> 
        <StatusBar style="auto" /> 
        </SafeAreaView> 
      ); 
  }

export  function Cadastro() { 
  return ( 
  <SafeAreaView style={styles.container}> 
  <Text style={styles.title}>Cadastro</Text> 
  <Input 
  placeholder="Nome" 
  leftIcon={<MaterialIcons name="person" size={24} color="black" />} 
  containerStyle={styles.inputContainer} 
  /> 
  <Input
   placeholder="Email" 
   leftIcon={<MaterialIcons name="email" size={24} color="black" />} 
   containerStyle={styles.inputContainer} 
   /> 
   <Input 
   placeholder="Senha" 
   leftIcon={<MaterialIcons name="lock" size={24} color="black" />} 
   secureTextEntry 
   containerStyle={styles.inputContainer} 
   /> 
   <TouchableOpacity onPress={() => Alert.alert("Cadastro", "Você foi cadastrado!!")} style={styles.botao_1}> 
    <Text style={styles.texto}>Cadastrar</Text> 
    </TouchableOpacity> 
    <StatusBar style="auto" /> 
    </SafeAreaView> 
    ); 
  }

  export default function Recuperasenha() { 
    return ( 
    <SafeAreaView style={styles.container}> 
    <Text style={styles.title}>Esqueceu a senha</Text> 
    <Input
     placeholder="Email" 
     leftIcon={<MaterialIcons name="email" size={24} color="black" />} 
     containerStyle={styles.inputContainer} 
     /> 
     <TouchableOpacity onPress={() => Alert.alert("Cadastro", "Você foi cadastrado!!")} style={styles.botao_1}> 
      <Text style={styles.texto}>Enviar</Text> 
      </TouchableOpacity> 
      <StatusBar style="auto" /> 
      </SafeAreaView> 
      ); 
    }

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
  inputContainer: { 
    width: '30%', 
    alignSelf: 'center', 
  }, 
  botao_1: { 
    backgroundColor: 'blue', 
    marginTop: 10, 
    paddingVertical: 10, 
    paddingHorizontal: 40, 
    borderRadius: 10, 
  }, 
  texto: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 20, 
    textAlign: 'center', 
  }, 
  texto_senha: { 
    color: 'black', 
    fontWeight: 'bold', 
    fontSize: 20, 
    paddingTop: 10, 
  }, 
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
  }, 
});