import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const Exercicio4 = () => {
    const itens = ['Casa', 'Escola', 'Ponte', 'Sitio']
  return (
    <View>    
      <Text>Minha Lista de Itens:</Text>
      {itens.map((item, index)=>(
          <Text key={index}>{item}</Text>
      )
      )}
    </View>
  )
}

export default Exercicio4