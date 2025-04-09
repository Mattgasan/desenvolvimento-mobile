import { Text, View, StyleSheet, Image } from 'react-native';

import Header from './src/components/Header/index.js';
import Dados from './src/components/Dados/index.js';
import Formacao from './src/components/Formacao/index.js';
import Experiencia from './src/components/Experiencia/index.js';
import Projetos from './src/components/Projetos/index.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Dados />
      <Formacao />
      <Experiencia />
      <Projetos /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
