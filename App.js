import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import banco from './src/models/banco'
import cliente from './src/models/cliente'
import usuario from './src/models/usuario'

import BoasVindas from './src/views/BoasVindas'
import TelaLogin from './src/views/TelaLogin'
import Registrar from './src/views/Registrar'
import Home from './src/views/Home'
import CadastroCliente from './src/views/CadastroCliente'
import Clientes from './src/views/Clientes'
import Boletos from './src/views/Boletos'
import CadastrarBoleto from './src/views/CadastrarBoleto'



const Stack = createNativeStackNavigator()
// banco().apagarTables()
 banco().criarBanco()

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
        <Stack.Screen name='Boletos' component={Boletos}/>
        <Stack.Screen name='CadastrarBoleto' component={CadastrarBoleto} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App