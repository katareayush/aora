import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { Link , Redirect , router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'
import Button from '@/components/Button'


const RootLayout = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full flex items-center justify-center h-full px-4'>
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px]"
          />

          <Image
            source={images.cards}
            resizeMode="contain"
            className="max-w-[380px] h-[300px]"
          />

          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>Discover Endless Possibilites with <Text className='text-secondary-200'>Aora</Text></Text>

            <Image
              source={images.path}
              resizeMode="contain"
              className="max-w-[136px] h-[15px] absolute -bottom-2 -right-8"
            />
          </View>

          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center '>
            Where creativity meets innovation: embark on a journey of endless possibilities with Aora.
          </Text>

          <Button
            title ="Continue with Email"
            handlePress ={()=> router.push('/sign-in')}
            contanierStyles ="w-full mt-7" />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style="light"/>
    </SafeAreaView>
  )
}

export default RootLayout