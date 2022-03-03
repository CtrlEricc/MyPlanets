import React from "react"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './views/Home'
import Intro from './views/Intro'
import Details from './views/Details'

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Intro'>
                <Stack.Screen name='Intro' options={{ headerShown: false }} >
                    {props => (
                        <Intro {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen name='Home' options={{ headerShown: false, headerStyle: { backgroundColor: '#fa5e23' } }} >
                    {props => (
                        <Home {...props} />
                    )}
                </Stack.Screen>
                <Stack.Screen name='Details' component={Details} options={{
                    headerTitleAlign: "center",
                    title: 'Calculadora de gravidade',
                    headerStyle: { backgroundColor: '#fa5e23' },
                    headerTintColor: '#FFF'
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}