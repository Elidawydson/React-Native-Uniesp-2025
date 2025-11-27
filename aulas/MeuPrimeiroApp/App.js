import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Exercicio1 from './src/components/Exercicio1'
import Exercicio2 from './src/components/Exercicio2'
import Exercicio3 from './src/components/Exercicio3'
import Exercicio4 from './src/components/Exercicio4'

const App = () => {
  /* resposta 1: <Exercicio1 nome="Reinaldo"/> 
  resposta 2: <Exercicio2/>
    */
  return (
    <View style={style.container}>
      <Exercicio4/>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0"
  },
  text: {
    fontSize: 20,
    color: "black"
  }
})

export default App