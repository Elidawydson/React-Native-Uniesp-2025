import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreens = () => {
    const items = [
        {id: '1', name: 'Curso de React Native', description: 'Aprenda a criar Apps para Android e Ios'},
        {id: '2', name: 'Curso de Java Spring Boot', description: 'Construa Apis robustas com Java Spring'},
        {id: '3', name: 'Curso de Php', description: 'Aprenda a criar páginas web altamente profissionais'},
        {id: '4', name: 'Curso de Python', description: 'Aprenda uma das linguagens mais famosas da atualidade'}

    ]
        
  return (
    <View style = {styles.container}>
      <Text style={styles.title}>Cursos Disponpíveis</Text>
      <FlatList 
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
        </TouchableOpacity>
      )}
      ></FlatList>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        background: '#f5f5f5'
    },
    title: {
        fontSize: 22,
        fontweight: 'bold', marginBottom: 20
    },
    itemContainer: {
        backgroundColor: '#ffff',
        padding: 20,
        marginBottom: 20,
        borderRadius: 8,
        elevation: 2
    },
    itemTitle: {
        fontSize: 18,
        fontweight: 'bold'
    },
    itemDescription: {
        fontSize: 14,
        color: '#555'

    }
})

export default HomeScreens