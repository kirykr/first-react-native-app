import { Text, StyleSheet } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "green",
    fontSize: 18,
    fontFamily: "Avenir",
  },
});

export default AppText;
