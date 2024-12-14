import React from "react"
import { ScrollView, StatusBar, View, Text, Image } from "react-native"
import Navegador from "../components/Navegador"

import AsyncStorage from "@react-native-async-storage/async-storage"

import Estilo from "../styles/Estilo";


export default function Profile({ navigation }) {
    const musicas = AsyncStorage.getItem('musicas')
    const genero_mais_ouvido = AsyncStorage.getItem('genero_mais_ouvido')
    const rock = AsyncStorage.getItem('rock')
    const punk_rock = AsyncStorage.getItem('punk_rock')
    const pop = AsyncStorage.getItem('pop')
    const mpb = AsyncStorage.getItem('mpb')
    return( <View View style={{ backgroundColor: "#2e2e2e", flex: 1 }}>
        <StatusBar barStyle="light-content"/>
        <Navegador navigation={navigation}/>
        
        <Text style = {Estilo.titulo} >Perfil</Text>
        <Text style = {Estilo.subtitulo}>Músicas ouvidas: <Text style={Estilo.informação}>{musicas}</Text></Text>
        <Text style = {Estilo.subtitulo}>Gênero mais ouvido: <Text style={Estilo.informação}>{genero_mais_ouvido}</Text></Text>
        <Text></Text>
        <Text style = {Estilo.subtitulo}>Você ouviu:</Text>
        <Text style = {Estilo.subsubtitulo}>▫️ {rock} músicas de rock</Text>
        <Text style = {Estilo.subsubtitulo}>▫️ {punk_rock} músicas de punk rock</Text>
        <Text style = {Estilo.subsubtitulo}>▫️ {pop} músicas de pop</Text>
        <Text style = {Estilo.subsubtitulo}>▫️ {mpb} músicas de mpb</Text>
    </View>
    );  
}