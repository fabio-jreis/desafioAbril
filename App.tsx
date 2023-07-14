import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Home from "./src/Home"
import Details from "./src/Details";

const App = () => {
  
  const Stack = createStackNavigator();
  
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details}/>        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;