import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#52015e",
  },
  outerImage: {
    marginHorizontal: 30,
    marginVertical: 15,
    width: 210,
    height: 200,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
  innerImage: {
    width: 120,
    resizeMode: "contain",
  },
  username: {
    fontSize: 20,
    color: "white",
  },
  usertag: {
    fontSize: 12,
    color: "grey",
  },
});

export default styles;
