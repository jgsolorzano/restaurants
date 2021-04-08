import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'//dist/icons/Icon'

import RestaurantsStack from './RestaurantsStack'
import FavoriteStack from './FavoritesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'


const tab = createBottomTabNavigator()

export default function Navigation() {

    const screenOptions = (route, color) => {
        let iconName
        switch (route.name) {
            case "restaurants":
                iconName="compass-outline"
                break;
            case "favorites":
                iconName="heart-outline"
                break;
            case "top-restaurants":
                iconName="star-outline"
                break;
            case "search":
                iconName="magnify"
                break;
            case "account":
                iconName="home-outline"
                break;
            
        
        }
        return (
            <Icon
                type="material-community"
                name={iconName}
                size={22}
                color= {color}
            
            />
        )
    }

    return (
        <NavigationContainer>
            <tab.Navigator
                initialRouteName="restaurants"
                tabBarOptions={{
                    inactiveTintColor:"#a17dc3",
                    activeTintColor:"#442484"            
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color)

                })}
            
            >
                <tab.Screen
                    name="restaurants"
                    component={RestaurantsStack}
                    options={{title: "Restaurantes"}}
                />
                <tab.Screen
                    name="favorites"
                    component={FavoriteStack}
                    options={{title: "Favoritos"}}
                />
                <tab.Screen
                    name="top-restaurants"
                    component={TopRestaurantsStack}
                    options={{title: "Top 10"}}
                />
                <tab.Screen
                    name="search"
                    component={SearchStack}
                    options={{title: "Buscar"}}
                />
                <tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{title: "Cuenta"}}
                />

            </tab.Navigator>

        </NavigationContainer>
    )
}
