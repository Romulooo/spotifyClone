import React, { useEffect, useState } from "react"
import { ScrollView, StatusBar, View, Text, Image } from "react-native"
import Navegador from "../components/Navegador"

import ObterMusicasCurtidas from "../functions/ObterMusicasCurtidas"
import Dados from "../musicas/Dados"
import Conteudo from "../components/Conteudo"

import Estilo from "../styles/Estilo"

export default function Likes({ navigation }) {

    const [ curtidas, definirCurtidas ] = useState([])

    async function obterCurtidas() {
        const lista = await ObterMusicasCurtidas()
        definirCurtidas(lista)
      }
      obterCurtidas()

    return( <View backgroundColor="#2e2e2e">
        <StatusBar barStyle="light-content" backgroundColor="#000000"/>
        <Navegador navigation={navigation}/>
        <ScrollView pagingEnabled>

        <Text style = {Estilo.titulo} >Likes</Text>

        { curtidas.length > 0 ?
        Dados.map(function(musica) {
            if (curtidas.includes(musica.nome)) {
                return <Conteudo 
                nome={ musica.nome }
                banda={ musica.banda }
                imagem = {musica.imagem}
                />
            }
        })  
        :
            <View>
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
                <Text style={Estilo.semLikes}> Nenhuma música curtida! </Text>

            </View>
        }
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