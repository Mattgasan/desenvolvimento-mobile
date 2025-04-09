import { Text, View } from 'react-native';

import {styles} from './styles'

function Formacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Formação:</Text>
      <Text>Graduando em Sistemas Para Internet na Fatec Rubens Lara</Text>
    </View>
  );
}

export default Formacao