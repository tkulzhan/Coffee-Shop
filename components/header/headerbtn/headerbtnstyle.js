import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10 + "%"
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
  }),
});

export default styles;
