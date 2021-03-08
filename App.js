import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import homeScreen from "./pages/HomeScreen";
import navigationScreen from "./pages/navigationScreen";
import profileScreen from "./pages/profile";
import SignIn from "./pages/SignIn";

const Stack = createStackNavigator();

function App() {
  return (
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

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
