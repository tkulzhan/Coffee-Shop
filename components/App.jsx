import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./home/Home";
import Marketplace from "./marketplace/Marketplace";
import CustomDrawer from "./drawer/CustomDrawer";
import Icon from "react-native-vector-icons/FontAwesome";
import Settings from "./settings/Settings";
import FAQ from "./faq/FAQ"

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          drawerLabelStyle: { marginLeft: -20, fontSize: 16, color: "white" },
          drawerActiveBackgroundColor: "#2C2F48",
          drawerActiveTintColor: "white",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: () => <Icon name="home" color={"white"} size={20} />,
          }}
        />
        <Drawer.Screen
          name="Marketplace"
          component={Marketplace}
          options={{
            drawerIcon: () => (
              <Icon name="bitbucket" color={"white"} size={20} />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: () => <Icon name="gear" color={"white"} size={20} />,
          }}
        />
        <Drawer.Screen
          name="FAQ"
          component={FAQ}
          options={{
            drawerIcon: () => <Icon name="question-circle-o" color={"white"} size={20} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
