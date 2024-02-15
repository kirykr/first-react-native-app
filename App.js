import { StyleSheet, Text, View } from "react-native";

import Card from "./app/components/Card";
import LIstingDetailsScreen from "./app/components/LIstingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return <MessagesScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
