import { Text, StyleSheet } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "green",
    fontSize: 18,
    fontFamily: "Avenir",
  },
});

export default AppText;
