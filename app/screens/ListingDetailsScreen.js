import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/red-jacket.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/boy-with-shade.png")}
            title="Male Avatar"
            subTitle="5 listings "
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  userContainer: {
    marginVertical: 50,
  },
});
export default ListingDetailsScreen;
