import { View, Text } from 'react-native'
import {styles} from './styles'
import {useState} from 'react'
import Botao from '../../components/botao'

function Contador(){
  const [cont, setCont] = useState(0)

  function increment(){
    setCont(cont + 1)
  }

  function decrement(){
    if (cont > 0)
      setCont(cont - 1)
  }

  function zerar(){
    setCont(0)
  }

  return(
    <View>

      <Text style={styles.title}>People Counter</Text>
      <Text style={styles.contador}>{cont}</Text>
      <Botao titulo='Incrementar' cor='green' funcao={increment}/>
      <Botao titulo='Decrementar' cor='red' funcao={decrement}/>
      <Botao titulo='Zerar/Reset' cor='orange' funcao={zerar} style={styles.ultimo}/>

    </View>
  )
}

export default Contador