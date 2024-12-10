import React from "react"
import { ScrollView, StatusBar, View, Text, Image } from "react-native"
import Navegador from "../components/Navegador"

import AsyncStorage from "@react-native-async-storage/async-storage"

import Estilo from "../styles/Estilo";


export default function Profile({ navigation }) {
    const musicas = AsyncStorage.getItem('musicas')
    const genero_mais_ouvido = AsyncStorage.getItem("genero_mais_ouvido")
    return( <View backgroundColor="#2e2e2e">
        <StatusBar barStyle="light-content"/>
        <Navegador navigation={navigation}/>
        <ScrollView pagingEnabled>
        <Text style = {Estilo.titulo} >Perfil</Text>
        <Text style = {Estilo.subtitulo}>Músicas ouvidas: <Text style={Estilo.informação}>{musicas}</Text></Text>
        <Text style = {Estilo.subtitulo}>Artista mais ouvido: <Text style={Estilo.informação}></Text></Text>
        <Text style = {Estilo.subtitulo}>Gênero mais ouvido: <Text style={Estilo.informação}>{genero_mais_ouvido}</Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
            

        </ScrollView>
    </View>
    );  
}