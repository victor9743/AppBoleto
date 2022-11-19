import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'



import BoasVindas from './src/views/BoasVindas'
import TelaLogin from './src/views/TelaLogin'
import Registrar from './src/views/Registrar'
import Home from './src/views/Home'
import CadastroCliente from './src/views/CadastroCliente'
import Clientes from './src/views/Clientes'

const Stack = createNativeStackNavigator()

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BoasVindas' screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#10c491'}
      }}>
        <Stack.Screen name="BoasVindas" component={BoasVindas} options={{ headerShown: false }} />
        <Stack.Screen name="TelaLogin" component={TelaLogin}/>
        <Stack.Screen name="Registrar" component={Registrar}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="CadastroCliente" component={CadastroCliente} />
        <Stack.Screen name="Clientes" component={Clientes} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}

export default App