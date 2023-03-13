import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
// import { NativeBaseProvider, Box } from 'native-base'
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import store from './StateManagement/Store'
import { ThemeProvider, createTheme } from '@rneui/themed'
// import theme from './theme'
import RootNavigator from './src/navigation/rootNavigation'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { ApolloProvider } from '@apollo/client'
import { StripeProvider } from '@stripe/stripe-react-native'
import useClient from './src/lib/client'

export default function App() {
  const client = useClient()
  let persistor = persistStore(store)

  return (
    // <SafeAreaView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <ThemeProvider>
          <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}

            <ApolloProvider client={client}>
              <StripeProvider publishableKey="pk_test_51MfPWZI4CD8H90K2zYRQSG2YB9dkFR6GwKChMF8b9VfIhLA6VzXwi2hcleBjOrNPaGcmraabqk0Vo7SxmendxV2U00PkpseKEc">
                <StatusBar style="dark" />
              </StripeProvider>
              <RootNavigator />
            </ApolloProvider>

            {/* </PersistGate> */}
          </Provider>
        </ThemeProvider>
      </BottomSheetModalProvider>
    
  )
}
