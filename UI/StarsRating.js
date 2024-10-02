import { View, Text, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import React, {} from 'react'

const StarsRating = ({onPressFuntion, star}) => {
  return (
    <Pressable
        onPress={onPressFuntion}>
        <Icon 
            name={star}
            size={25}
            color={star=='star' ? '#FFD700' : '#000'}//operador ternario
        />
    </Pressable>
  )
}

export default StarsRating