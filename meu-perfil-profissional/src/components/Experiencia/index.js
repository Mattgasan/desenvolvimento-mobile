import { Text, View } from 'react-native';

import {styles} from './styles'

function Experiencia() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Experiência:</Text>
      <Text>Empresa: Pitico Studio</Text>
      <Text>Profissão: Desenvolvedor Front-End </Text>
      <Text>Tempo: 9 Meses </Text>
    </View>
  );
}

export default Experiencia