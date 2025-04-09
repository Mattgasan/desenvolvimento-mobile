import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import {styles} from './styles'

import Botao from '../../components/botao'
import Campo from '../../components/campo'

function Multiplicador(){
  const [resultado, setResultado] = useState()
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')

  function calcular(){
    if (input1 === ''){
      alert('Por favor, digite um valor para o 1° número!')
      return
    }
    else if (input2 === ''){
      alert('Por favor, digite um valor para o 2° número!')
      return
    }
    else
      setResultado(input1 * input2)
  }

  return(
    <SafeAreaView>
      <View style={styles.area}>
        <Text style={styles.titulo}>Multiplicador de Números</Text>

        <Campo
          placeholder = 'Digite o 1° número'
          funcao = {setInput1}
          tipo = 'numeric'
        />

        <Campo
          placeholder = 'Digite o 2° número'
          funcao = {setInput2}
          tipo = 'numeric'
        />

        <Botao 
          titulo = 'Calcular'
          cor = 'green'
          funcao = {calcular}
        />

        <Botao
          titulo = 'Limpar'
          funcao = {() => setResultado('')}
        />

        <Text style={styles.resultado}>{resultado}</Text>

        </View>
    </SafeAreaView>
  )
}

export default Multiplicador