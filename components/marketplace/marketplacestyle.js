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
    width: 97 + "%",
    height: 200,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 3 + "%",
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
});

export default styles;
