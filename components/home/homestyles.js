import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#402c5c",
  },
  headerText: {
    fontSize: 28,
    color: "#fff",
    marginTop: 100,
  },
  headerImage: {
    width: 97 + "%",
    height: 200,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 3 + "%",
    textAlign: "center",
    marginVertical: 20,
  },
  explore: {
    color: "white",
    fontSize: 18,
    marginLeft: 3 + "%",
    marginBottom: 20,
  },
});

export default styles;
