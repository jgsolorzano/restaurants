import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import RestaurantsStack from './RestaurantsStack'
import FavoriteStack from './FavoritesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'

const tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <tab.Navigator>
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
                    options={{title: "Top 5"}}
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
