import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar, View, Text } from "react-native";
import Navegador from "../components/Navegador";

import ObterMusicasCurtidas from "../functions/ObterMusicasCurtidas";
import Dados from "../musicas/Dados";
import Conteudo from "../components/Conteudo";

import Estilo from "../styles/Estilo";

export default function Likes({ navigation }) {
    const [curtidas, definirCurtidas] = useState([]);

    // Carregar curtidas ao montar o componente
    useEffect(() => {
        async function obterCurtidas() {
            const lista = await ObterMusicasCurtidas();
            definirCurtidas(lista);
        }
        obterCurtidas();
    }, []);

    return (
        <View style={{ backgroundColor: "#2e2e2e", flex: 1 }}>
            <StatusBar barStyle="light-content" backgroundColor="#000000" />
            <Navegador navigation={navigation} />
            <ScrollView pagingEnabled>
                <Text style={Estilo.titulo}>Likes</Text>

                {curtidas.length > 0 ? (
                    Dados.map((musica) =>
                        curtidas.includes(musica.id) ? (
                            <Conteudo
                                key = { musica.id }
                                nome = { musica.nome }
                                banda = { musica.banda }
                                imagem = { musica.imagem }
                                fonte = { musica.fonte }
                                id = { musica.id }
                            />
                        ) : null
                    )
                ) : (
                    <View>
                        <Text style={Estilo.semLikes}>Nenhuma música curtida!</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}