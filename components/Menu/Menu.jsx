import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import menu from '../../assets/img/burger.png'

const Menu = ({onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: '20px',
        height: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10px',
        marginRight: '20px',
      }}
      onPress={onPress}
    >
      <Image
        source={menu}
        resizeMode="cover"
        style={{
          height: '100%',
          width: '100%',
        }}
      />
    </TouchableOpacity>
  )
}

export default Menu
