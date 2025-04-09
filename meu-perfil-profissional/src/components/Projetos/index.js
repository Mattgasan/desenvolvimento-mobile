import { View, Text } from 'react-native';

import {styles} from './styles'

function Projetos() {
  return(
     <View style={styles.container}>
      <Text style={styles.paragraph}>Projetos:</Text>
      <Text>-Websites de Empresas de Produtos de Plástico</Text>
      <Text>-Projetização no Figma de Websites</Text>
    </View>
  );
}
export default Projetos