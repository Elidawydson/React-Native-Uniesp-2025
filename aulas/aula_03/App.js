import { View, Text } from 'react-native'
import LoginScreen from './src/Screens/LoginScreen'
import HomeScreens from './src/Screens/HomeScreens'


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <LoginScreen />
    </View>
  )
}

export default App