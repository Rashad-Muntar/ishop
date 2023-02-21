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
import { ApolloProvider } from '@apollo/client'
import useClient from './src/lib/client'
import MainNavigation from './src/navigation/mainNavigation'

export default function App() {
  const client = useClient()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <Provider store={store}>
            <ApolloProvider client={client}>
              <StatusBar style="dark" />
              <DrawerNavigator />
            </ApolloProvider>
          </Provider>
        </NativeBaseProvider>
      </NavigationContainer>
    </SafeAreaView>
  )
}
