import React, { useEffect, useState } from "react"
import { View, Pressable, Image, Text } from "react-native"
import { Audio, ResizeMode } from "expo-av"
import { LinearGradient } from "expo-linear-gradient"

import Estilo from "../styles/Estilo"

export default function Conteudo(props) {
    return <View>
        <View>
            <Pressable style={Estilo.musica}>
                <Image style={ Estilo.musicaIcone } source={ props.imagem } />
                <Text style={ Estilo.musicaTitulo }> { props.nome } </Text>
                <Text style={ Estilo.musicaBanda }> { props.banda } </Text>
            </Pressable>
        </View>
    </View>
}