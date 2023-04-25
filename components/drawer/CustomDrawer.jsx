import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, ImageBackground, Image } from "react-native";
import styles from "./drawerstyle";
import r3 from "../../assets/r.png";
import r1 from "../../assets/profile.png";

function CustomDrawer(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <ImageBackground source={r3} style={styles.outerImage}>
            <Image source={r1} style={styles.innerImage}></Image>
          </ImageBackground>
          <Text style={styles.username}>John Doe</Text>
          <Text style={styles.usertag}>@johndoe</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

export default CustomDrawer;
