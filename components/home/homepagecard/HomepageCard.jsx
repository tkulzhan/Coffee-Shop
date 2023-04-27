import { TouchableOpacity, Text, ImageBackground } from "react-native";
import img from "../../../assets/1.jpg";
import img1 from "../../../assets/rectangle4.png";
import styles from "./homepagecardstyle";

export const HomepageCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        source={img}
        style={styles.imgBG}
        imageStyle={{ borderRadius: 25 }}
      >
        <ImageBackground
          source={img1}
          style={styles.imgBGtext}
          imageStyle={{
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          }}
        >
          <Text style={styles.cardHeader}>Order, drink and enjoy</Text>
          <Text style={styles.cardText}>
            Explore the digital world with a cup of strong Americano
            V2.0#exx1..3
          </Text>
        </ImageBackground>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HomepageCard;
