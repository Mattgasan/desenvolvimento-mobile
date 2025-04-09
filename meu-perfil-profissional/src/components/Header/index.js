import { View, Image } from 'react-native';

import {styles} from './styles'

function Header() {
  return(
    <View style={styles.container}>
      <Image
        source={require('assets/ryan-gosling.webp')}
        style={{height: '250px', width: '250px', marginRight:'auto', marginLeft:'auto'}}/>
    </View>
  );
}
export default Header