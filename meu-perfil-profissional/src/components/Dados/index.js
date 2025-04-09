import { Text, View } from 'react-native';

import {styles} from './styles'

function Dados() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Dados</Text>
      <Text>Nome: Matheus Gasan</Text>
      <Text>Contato: (13) 996668-9663</Text>
      <Text>Linkedin: likedin.com/in/matheusgasan</Text>
      <Text>Github: github.com/Mattgasan</Text> 
    </View>
  );
}

export default Dados