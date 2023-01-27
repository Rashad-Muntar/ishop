import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider, Box } from 'native-base'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import store from './StateManagement/Store'
import theme from './theme'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './src/navigation/mainNavigation'
import MainNavigation from './src/navigation/mainNavigation'

export default function App() {
  const queryClient = new QueryClient()

  return (
    // <SafeAreaView>
    <NavigationContainer>
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <StatusBar style="dark" />
            <DrawerNavigator />
        </QueryClientProvider>
      </Provider>
    </NativeBaseProvider>
    </NavigationContainer>
  )
}
