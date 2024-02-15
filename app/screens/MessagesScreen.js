import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import ListItem from "../components/ListItem";

function MessagesScreen(props) {
  const data = [
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../assets/boy-with-shade.png"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../assets/boy-with-shade.png"),
    },
    {
      id: 3,
      title: "T3",
      description: "D3",
      image: require("../assets/boy-with-shade.png"),
    },
  ];
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={data}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default MessagesScreen;
