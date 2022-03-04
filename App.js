import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/screens/Login'


export default function App() {
  return  <>
          <Login styles={estilos.container}/>
          <StatusBar translucent={true}/>
          </>

}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});