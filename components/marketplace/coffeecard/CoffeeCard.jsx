import { View, Image, Text, ImageBackground } from "react-native";
import styles from "./coffeecardstyle";
import rectangle1 from "../../../assets/Rectangle1.png";
import rectangle2 from "../../../assets/Rectangle2.png";
import rectangle3 from "../../../assets/Rectangle3.png";
import rectangle from "../../../assets/Rectangle.png";

function CoffeeCard({ img, name }) {
  const rs = [rectangle, rectangle1, rectangle2, rectangle3]
  const rand = Math.floor(Math.random() * 4);
  return (
    <View style={styles.coffeeCard}>
      <ImageBackground source={rs[rand]} style={styles.rectangle}>
        <Image source={img} />
      </ImageBackground>
      <Text style={styles.coffeeName}>{name}</Text>
    </View>
  );
}

export default CoffeeCard;
