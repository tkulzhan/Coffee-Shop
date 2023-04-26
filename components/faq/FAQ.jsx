import { View, Text } from "react-native";
import Header from "../header/Header";

function FAQ({ navigation }) {
  return (
    <>
      <Header navigation={navigation} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Welcome to our FAQ Screen</Text>
      </View>
    </>
  );
}

export default FAQ;
