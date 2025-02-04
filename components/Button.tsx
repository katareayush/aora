import { TouchableOpacity , Text } from 'react-native'
import React from 'react'

interface ButtonProps {
    title: string,
    handlePress: () => void,
    contanierStyles?: string,
    textStyles?: string,
    isLoading?: boolean
}

const Button:React.FC<ButtonProps> = ({title,handlePress,contanierStyles,textStyles,isLoading}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}
    className={`bg-secondary rounded-xl min-h-[62px] items-center justify-center ${contanierStyles} &{isLoading ? 'opacity-50' : ''}`}>
      <Text className={`text-primary font-psemibold text-xl ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button