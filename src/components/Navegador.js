import React from "react"
import { Image, Pressable, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import Estilo from "../styles/Estilo"

export default function Navegador(props) {
    return <LinearGradient colors={['transparent', '#2e2e2e']} style={ Estilo.navegador }>
        <Pressable onPress={ () => props.navigation.navigate("Home") }>
            <Image style={ Estilo.navegadorIcone } source={ require("../../assets/iconeHome.png") }/>
        </Pressable>
        <Pressable onPress={ () => props.navigation.navigate("Likes") }>
            <Image style={ Estilo.navegadorIcone } source={ require("../../assets/iconeLike.png") }/>
        </Pressable>
        <Pressable onPress={ () => props.navigation.navigate("Profile") }>
            <Image style={ Estilo.navegadorIcone } source={ require("../../assets/iconeProfile.png") }/>
        </Pressable>
  </LinearGradient>
}