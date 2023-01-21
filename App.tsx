import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import theme from './theme';
import MainNavigation from './src/navigation/mainNavigation';


export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style="auto" />
      <MainNavigation />
    </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});