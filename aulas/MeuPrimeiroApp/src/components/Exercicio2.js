import {View, Button, Text, StyleSheet} from 'react-native'
import React, { useState } from 'react'

const Exercicio2 = () => {
    const [count, setCount] = useState(0);
    return(
        <View>
            <Text style={style.espaco}>Contador React Native</Text>
            <Text style={style.espaco}>{count}</Text>
            <View style={style.espaco}>
                <Button title='Incrementar' onPress={()=>setCount(count + 1)}/>
            </View>
            <View>
                <Button title='Decrementar' onPress={()=>setCount(count - 1)}/>                
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    espaco: {
        marginVertical: 10,
        width: 200,
    },
})
export default Exercicio2;