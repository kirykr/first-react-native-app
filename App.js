import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./app/components/AppText/AppText.ios";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
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
