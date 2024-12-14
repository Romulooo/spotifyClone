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

    return( <View style={{ backgroundColor: "#2e2e2e", flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor="#000000"/>
        <Navegador navigation={navigation}/>
        <ScrollView>

        <Text style = {Estilo.titulo} >Início</Text>

        { DadosAleatorio.length > 0 &&
        DadosAleatorio.map(function(musica) {
            return <Conteudo 
                key = { musica.id } // Adicionando a propriedade key
                nome = { musica.nome }
                banda = { musica.banda }
                genero = { musica.genero }
                imagem = { musica.imagem }
                fonte = { musica.fonte } 
                id = { musica.id }
            />
          })
        }
        
        <Text style={Estilo.espaçamento}></Text>
        
        </ScrollView>
    </View>
    );  
}