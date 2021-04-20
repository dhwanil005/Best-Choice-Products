import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import homeScreen from "./src/HomeScreen";
import navigationScreen from "./src/navigationScreen";
import profileScreen from "./src/profile";
import SignIn from "./src/SignIn";
import Product from "./src/product";
import AddtoCart from "./src/AddtoCart";
import Checkout from "./src/checkout";
import Listings from "./src/Listing";
//redux
import { Provider } from "react-redux";
import { store, persistor } from "./src/store/index";
import { PersistGate } from "redux-persist/es/integration/react";
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {
            //Home Screen
          }
          <Stack.Screen
            name="homeScreen"
            component={homeScreen}
            options={{
              headerShown: false,
            }}
          />
          {
            //Navigation Screen
          }
          <Stack.Screen
            name="Navigation"
            component={navigationScreen}
            options={{
              headerShown: false,
            }}
          />
          {
            //profile Screen
          }
          <Stack.Screen
            name="Profile"
            component={profileScreen}
            options={{
              headerShown: false,
            }}
          />
          {
            //SignIn screen
          }
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false,
            }}
          />

          {
            //Product screen
          }
          <Stack.Screen
            name="product"
            component={Product}
            options={{
              headerShown: false,
            }}
          />
          {
            //AddToCart
          }
          <Stack.Screen
            name="addtocart"
            component={AddtoCart}
            options={{
              headerShown: false,
            }}
          />

          {
            //Checkout
          }
          <Stack.Screen
            name="checkout"
            component={Checkout}
            options={{
              headerShown: false,
            }}
          />
          {
            //Listings
          }
          <Stack.Screen
            name="listings"
            component={Listings}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
