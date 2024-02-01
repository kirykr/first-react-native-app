import { StyleSheet, Text, View } from "react-native";

import Card from "./app/components/Card";
import LIstingDetailsScreen from "./app/components/LIstingDetailsScreen";

export default function App() {
  return <LIstingDetailsScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
