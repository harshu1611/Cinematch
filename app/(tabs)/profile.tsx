import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getUser, login, logout } from '@/services/auth'
import { useRouter } from 'expo-router'

const Profile = () => {
const router = useRouter()
const getLogout=async()=>{
  try {
    let res =await logout();
    if(res){
      router.replace("/login");
    }
  } catch (error) {
    return (
      <Text className="text-white font-bold">Error In Logout</Text>
    )
  }
}

  return (
    <SafeAreaView className='bg-dark-200'>
        <TouchableOpacity onPress={()=>{getLogout()}} className='mt-10'>
            <Text className='text-white text-2xl font-bold'>Logout</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})