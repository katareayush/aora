import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const RootLayout = () => {
  return (
    <>
    <View className=' min-h-screen text-white p-4 justify-center items-center'>
        <Text>Header</Text>
        <Text>Footer</Text> 
        <Link href={'/profile'} style={{color: 'blue'}}>Home</Link>
    </View>
    </>   
  )
}

export default RootLayout