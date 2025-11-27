import {View, TextInput, Button, Text, StyleSheet} from 'react-native'
import React, { useState } from 'react'

const Exercicio3 = ()=>{
    const [entrada, setEntrada] = useState('')
    const [mensagem, setMensagem] = useState('')
    return(
        <View>
            <TextInput value={entrada} onChangeText={setEntrada} placeholder='Digite o texto'/>
            <View>
                <Button title='OK' onPress={()=>setMensagem(entrada)}/>
            </View>
            <Text>{mensagem}</Text>
        </View>
    )
}
export default Exercicio3;