import { StackNavigationProp } from '@react-navigation/stack';
export type RootStackParamList = {
    ProductList: undefined;
    Categories: undefined;
  };
  
 export type ScreenLeftProps = {
    navigation: StackNavigationProp<RootStackParamList, 'ProductList'>;
  };
  
  export type ScreenBottomProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Categories'>;
  };