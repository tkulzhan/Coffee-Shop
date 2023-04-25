import { View, Text } from "react-native";
import Header from "../header/Header";

function Home({ navigation }) {
  return (
    <>
      <Header navigation={navigation}/>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Welcome to our Home Screen</Text>
      </View>
    </>
  );
}

export default Home;
