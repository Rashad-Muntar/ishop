import CartList from '../shared/cart/cartItemList'
import CustomDrawer from '../shared/CustomDrawer'
import Categories from '../screens/Dashbaord/Category/Categories'
import ProductList from '../screens/Dashbaord/Product/ProductList'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()
const Cart = createDrawerNavigator()

// export const CartDrawer = () => (
//   <Cart.Navigator
//     drawerPosition="right"
//     overlayColor="transparent"
//     drawerStyle={{
//       width: '50%',
//     }}
//     drawerContent={(props: any) => <CartList {...props} />}
//     contentContainerStyle={{
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     }}
//     drawerContentOptions={{
//       activeTintColor: 'blue',
//       inactiveTintColor: 'gray',
//       labelStyle: {
//         fontSize: 18,
//       },
//     }}
//   >
//     <Drawer.Screen
//       name="ProductList"
//       component={ProductList}
//       options={{ headerShown: false }}
//     />
//   </Cart.Navigator>
// )

export const MenuDrawer = () => (
  <Drawer.Navigator
    drawerPosition="bottom"
    overlayColor="transparent"
    drawerStyle={{
      width: '80%',
    }}
    drawerContent={(props: any) => <CustomDrawer {...props} />}
    contentContainerStyle={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    drawerContentOptions={{
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 18,
      },
    }}
  >
    <Drawer.Screen
      name="Categories"
      component={Categories}
      options={{ headerShown: false }}
    />
  </Drawer.Navigator>
)
