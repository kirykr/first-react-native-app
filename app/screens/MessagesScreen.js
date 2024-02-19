import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
const initialMessages = [
  {
    id: 1,
    title: "T1",
    description:
      "Aliqua nulla amet labore consectetur aliquip tempor incididunt Lorem reprehenderit. Dolor deserunt anim Lorem esse aliqua veniam cillum ut ipsum proident in pariatur. Mollit aliquip fugiat mollit cillum aliqua labore deserunt ut. Duis irure sint est ipsum sunt exercitation. Aliqua veniam eiusmod amet ex mollit officia ullamco elit fugiat sit duis aliquip aute.",
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

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Listing pressed")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={<ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});
export default MessagesScreen;
