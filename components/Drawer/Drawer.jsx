import {
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Animated,
  Text,
} from 'react-native'
import { Stack, useRouter, Link } from 'expo-router'
import styles from './drawer.srtyle'
import Menu from '../Menu/Menu'
import HeaderSearch from '../HeaderSearch/HeaderSearch'
import { useState, useRef } from 'react'
import bg from "../../assets/img/bg.jpg"

const Drawer = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const sidebarAnimation = useRef(new Animated.Value(0)).current

  const toggleSidebar = () => {
    setTimeout(() => {
      setSidebarVisible(!sidebarVisible)
    }, 150)
    Animated.timing(sidebarAnimation, {
      toValue: sidebarVisible ? 0 : 1,
      duration: 250,
      useNativeDriver: false,
    }).start()
  }

  const sidebarWidth = sidebarAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '75%'],
  })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#1E1E24',
          },
          headerTitleStyle: {
            fontWeight: 'medium',
            color: '#fff',
            fontSize: '24px',
            fontFamily: 'ChkBold',
          },
          headerTitle: 'Coffee Base',
          headerTintColor: '#fff',
          headerLeft: () => <Menu onPress={toggleSidebar} />,
          headerRight: () => <HeaderSearch />,
        }}
      />
      <View style={styles.container}>
        <ImageBackground
          source={'../../assets/img/bg.jpg'}
          style={{
            flex: 1,
            backgroundSize: 'cover',
            backgroudPosition: 'center',
            backgroundColor: '#18151c',
          }}
        >
          <ScrollView
            style={styles.containerMain}
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        </ImageBackground>
        <Animated.View style={[styles.sidebar, { width: sidebarWidth }]}>
          {sidebarVisible && (
            <>
              <Link style={styles.link} href="/" onPress={toggleSidebar}>
                <Text>Home</Text>
              </Link>
              <Link
                style={styles.link}
                href="/settings"
                onPress={toggleSidebar}
              >
                <Text>Settings</Text>
              </Link>
            </>
          )}
        </Animated.View>
      </View>
    </SafeAreaView>
  )
}

export default Drawer
