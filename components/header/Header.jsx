import { Stack } from "expo-router";
import HeaderBtn from "./headerbtn/HeaderBtn";
import menu from "../../assets/menu.png";

function Header({ navigation }) {
  return (
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: "#402c5c" },
        headerShadowVisible: false,
        headerLeft: () => (
          <HeaderBtn
            iconUrl={menu}
            dimension="100%"
            handlePress={() => navigation.openDrawer()}
          />
        ),
        headerTitle: "",
      }}
    ></Stack.Screen>
  );
}

export default Header;
