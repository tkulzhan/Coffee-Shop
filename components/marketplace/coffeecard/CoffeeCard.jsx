import { View, Image, Text, ImageBackground } from "react-native";
import styles from "./coffeecardstyle";
import rectangle from "../../../assets/rectangle1.png";

function CoffeeCard({ img, name }) {
  return (
    <View style={styles.coffeeCard}>
      <ImageBackground source={rectangle} style={styles.rectangle}>
        <Image source={img} />
      </ImageBackground>
      <Text style={styles.coffeeName}>{name}</Text>
    </View>
  );
}

export default CoffeeCard;
