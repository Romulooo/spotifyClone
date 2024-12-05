import React from "react"
import { ScrollView, StatusBar, View, Text, Image } from "react-native"
import Navegador from "../components/Navegador"

import Dados from "../musicas/Dados";
import Conteudo from "../components/Conteudo";
import Estilo from "../styles/Estilo";

const DadosAleatorio = Dados.sort(function() {
    return Math.random() - 0.5 
})

export default function Home({ navigation }) {

    return( <View backgroundColor="#2e2e2e">
        <StatusBar barStyle="light-content" backgroundColor="#000000"/>
        <Navegador navigation={navigation}/>
        <ScrollView pagingEnabled>

        <Text style = {Estilo.titulo} >Início</Text>

        { DadosAleatorio.length > 0 &&
        DadosAleatorio.map(function(musica) {
            return <Conteudo 
              nome = { musica.nome }
              banda = { musica.banda }
              genero = {musica.genero}
              imagem = {musica.imagem}
              fonte = {musica.fonte} 
              />
          })
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
        </ScrollView>
    </View>
    );  
}