import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import FavoriteNavigation from "./FavoriteNavigation";
import AcountNavigation from "./AcountNavigation";
import PokedexNavigation from "./PokedexNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => RenderPokeball(),
        }}
      />
      <Tab.Screen
        name="Acount"
        component={AcountNavigation}
        options={{
          tabBarLabel: "Mi perfil",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function RenderPokeball() {
  return (
    <Image
      source={require("../assets/Pokeball.png")}
      style={{
        width: 100,
        height: 100,
        top: -15,
      }}
    />
  );
}
