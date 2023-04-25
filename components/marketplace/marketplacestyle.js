import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#402c5c",
  },
  headerText: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 100,
  },
  headerImage: {
    width: 390,
    height: 200,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10
  },
});

export default styles;
