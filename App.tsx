import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider, Box } from 'native-base'
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import store from './StateManagement/Store'
import theme from './theme'
import RootNavigator from './src/navigation/rootNavigation'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { ApolloProvider } from '@apollo/client'
import useClient from './src/lib/client'

export default function App() {
  const client = useClient()
  let persistor = persistStore(store)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <BottomSheetModalProvider> */}
      <NativeBaseProvider theme={theme}>
        <Provider store={store}>
          {/* <PersistGate loading={null} persistor={persistor}> */}
            <ApolloProvider client={client}>
              <StatusBar style="dark" />
              <RootNavigator />
            </ApolloProvider>
          {/* </PersistGate> */}
        </Provider>
      </NativeBaseProvider>
      {/* </BottomSheetModalProvider> */}
    </SafeAreaView>
  )
}
