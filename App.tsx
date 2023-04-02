import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import store from './StateManagement/Store'
import { ThemeProvider, createTheme } from '@rneui/themed'
import RootNavigator from './src/navigation/rootNavigation'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { ApolloProvider } from '@apollo/client'
import { StripeProvider } from '@stripe/stripe-react-native'
import { Amplify } from "aws-amplify";
import Client from './src/lib/client'
import awsmobile from './src/aws-exports'

Amplify.configure(awsmobile)

export default function App() {
  // const client = useClient()
  let persistor = persistStore(store)

  return (
      <BottomSheetModalProvider>
        <ThemeProvider>
          <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}

            <ApolloProvider client={Client}>
              <StripeProvider publishableKey="pk_test_51MfPWZI4CD8H90K2zYRQSG2YB9dkFR6GwKChMF8b9VfIhLA6VzXwi2hcleBjOrNPaGcmraabqk0Vo7SxmendxV2U00PkpseKEc">
                <StatusBar style="dark" />
              </StripeProvider>
              <RootNavigator />
            </ApolloProvider>
          </Provider>
        </ThemeProvider>
      </BottomSheetModalProvider>
    
  )
}
