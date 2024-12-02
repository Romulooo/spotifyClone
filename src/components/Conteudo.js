import React, { useEffect, useState } from "react"
import { View, Pressable, Image, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import { Audio } from 'expo-av';

import Estilo from "../styles/Estilo"


import SalvarMusicaCurtida from "../functions/SalvarMusicaCurtida";
import ObterMusicasCurtidas from "../functions/ObterMusicasCurtidas";
import LimparMusicaCurtida from "../functions/LimparMusicaCurtida";



export default function Conteudo(props) {
    const [ estado, definirEstado ] = useState(true)
    const [ curtido, definirCurtido ] = useState(false)

    const [sound, setSound] = useState();

    function Curtir() {
        if (curtido) LimparMusicaCurtida(props.nome)
        else SalvarMusicaCurtida(props.nome)
        definirCurtido(!curtido)
    }

    useEffect(function() {
        async function obterCurtidas() {
          const lista = await ObterMusicasCurtidas()
          if (lista.includes(props.nome))
            definirCurtido(true)
        }
        obterCurtidas()
      }, [])


    async function playSound() {
        console.log('Carregando');
        const { sound } = await Audio.Sound.createAsync( require('../musicas/Green Day - American Idiot.mp3')
        );
        
        setSound(sound);
        
        console.log('Tocando');
        await sound.playAsync();
      }
    
      useEffect(() => {
        return sound
          ? () => {
              console.log('Parando');
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);
    
    return <View>
        <View>
            <Pressable style={Estilo.musica} onPress={() => {
                playSound()
            }}>
                <Image style={ Estilo.musicaIcone } source={ props.imagem } />
                <Text style={ Estilo.musicaTitulo }> { props.nome } </Text>
                <Text style={ Estilo.musicaBanda }> { props.banda } </Text>
            </Pressable>
            <Pressable onPress={ () => Curtir() }>
                { curtido ?
                <Image style={ Estilo.musicaLike } source={ require("../../assets/iconeLikePreenchido.png") }/>
                :
                <Image style={ Estilo.musicaLike } source={ require("../../assets/iconeLike.png") }/>
                }
            </Pressable>
        </View>
    </View>
}