import { View, Text, SafeAreaView, ImageBackground } from "react-native";
import Header from "../header/Header";
import { ScrollView } from "react-native-gesture-handler";
import image from "../../assets/3.png";
import HomepageCard from "./homepagecard/HomepageCard";
import styles from "./homestyles";

function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <ScrollView
        style={{
          backgroundColor: "#9D00AB",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <ImageBackground
            source={image}
            style={styles.headerImage}
            imageStyle={{ borderRadius: 15 }}
          >
            <Text style={styles.headerText}>
              DISCOVER YOUR PASSION WITH{" "}
              <Text style={{ color: "cyan" }}>COFFEE BASE</Text>
            </Text>
          </ImageBackground>
        </View>
        <Text style={styles.explore}>Explore community</Text>
        <HomepageCard />
        <HomepageCard />
        <HomepageCard />
        <HomepageCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
