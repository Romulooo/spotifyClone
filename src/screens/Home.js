import React from "react"
import { ScrollView, StatusBar, View, Text, Image } from "react-native"
import Navegador from "../components/Navegador"

import Dados from "../musicas/Dados";
import Conteudo from "../components/Conteudo";

const DadosAleatorio = Dados.sort(function() {
    return Math.random() - 0.5 
})

export default function Home({ navigation }) {
    return( <View backgroundColor="#2e2e2e">
        <StatusBar barStyle="light-content" backgroundColor="#000000"/>
        <Navegador navigation={navigation}/>
        <ScrollView pagingEnabled>

        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

        { DadosAleatorio.length > 0 &&
        DadosAleatorio.map(function(musica) {
            return <Conteudo 
              nome={ musica.nome }
              banda={ musica.banda }
              imagem = {musica.imagem}
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