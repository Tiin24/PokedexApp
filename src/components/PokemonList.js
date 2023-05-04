import { ActivityIndicator, Platform, StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import PokemonCard from "./PokemonCard";
import { size } from "lodash";

export default function PokemonList(props) {

  const { pokemons, loadPokemons, isNext } = props;

  const loadMore = () => {
    loadPokemons();
  };
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.contentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.3}
      ListFooterComponent={
        isNext &&(
        <ActivityIndicator
          size="large"
          style={styles.spinner}
        />)
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 50 : 60,
  },
});
