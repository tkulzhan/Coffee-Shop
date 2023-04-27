import { Stack } from "expo-router";
import HeaderBtn from "./headerbtn/HeaderBtn";
import menu from "../../assets/menu.png";

function Header({ navigation }) {
  return (
    <Stack.Screen
      options={{
        headerShadowVisible: false,
        headerTitle: "Coffee Base",
        headerStyle: {
          backgroundColor: "#383A57",
        },
        headerTitleStyle: {
          color: "#fff",
          marginLeft: 15
        },
        headerLeft: () => (
          <HeaderBtn
            iconUrl={menu}
            dimension="100%"
            handlePress={() => navigation.openDrawer()}
          />
        ),
      }}
    ></Stack.Screen>
  );
}

export default Header;
