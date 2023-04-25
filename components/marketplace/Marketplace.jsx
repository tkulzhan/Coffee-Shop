import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import CoffeeCard from "./coffeecard/CoffeeCard";
import img from "../../assets/cup1.png";
import image from "../../assets/image.png";
import styles from "./marketplacestyle";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../header/Header";

function Marketplace({navigation}) {
  const data = [
    { id: 1, img: img, name: "Sample drink" },
    { id: 2, img: img, name: "Sample drink" },
    { id: 3, img: img, name: "Sample drink" },
    { id: 4, img: img, name: "Sample drink" },
    { id: 5, img: img, name: "Sample drink" },
    { id: 6, img: img, name: "Sample drink" },
    { id: 7, img: img, name: "Sample drink" },
    { id: 8, img: img, name: "Sample drink" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}/>
      <ScrollView>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <ImageBackground
            source={image}
            style={styles.headerImage}
            imageStyle={{ borderRadius: 15 }}
          >
            <Text style={styles.headerText}>
              WELCOME TO THE MARKETPLACE. CHOOSE BETTER LIVE BETTER
            </Text>
          </ImageBackground>
          <View style={styles.list}>
            {data.map((item) => {
              return (
                <CoffeeCard img={item.img} name={item.name} key={item.id} />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Marketplace;
