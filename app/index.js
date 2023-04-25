import { Stack } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function Home() {
  return (
    <SafeAreaView style = {{flex: 1}}>
      <Stack.Screen options=
      {{
        headerTitle: "Coffee Base", 
        headerShadowVisible: false
      }} />
      <ScrollView style = {{
          backgroundColor: "#9D00AB",
          height: "100%"
         }} showsVerticalScrollIndicator = {false}>
         <View>

         </View>
      </ScrollView>
    </SafeAreaView>
  ); 
}

export default Home;
