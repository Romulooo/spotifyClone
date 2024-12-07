import React, { useEffect, useState } from "react"
import { View, Pressable, Image, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import AsyncStorage from "@react-native-async-storage/async-storage"

import { Audio } from 'expo-av';

import Estilo from "../styles/Estilo"

import SalvarMusicaCurtida from "../functions/SalvarMusicaCurtida";
import ObterMusicasCurtidas from "../functions/ObterMusicasCurtidas";
import LimparMusicaCurtida from "../functions/LimparMusicaCurtida";

let rock = '0'
let punk_rock = '0'
let mpb = '0'
let pop = '0'
let musicas = '0'
let genero_mais_ouvido = 'Nenhum'

export default function Conteudo(props) {
    const [ estado, definirEstado ] = useState(true)
    const [ curtido, definirCurtido ] = useState(false)

    const [sound, setSound] = useState();
    
    function Curtir() {
        if (curtido) LimparMusicaCurtida(props.id)
        else SalvarMusicaCurtida(props.id)
        definirCurtido(!curtido)
    }

    useEffect(function() {
        async function obterCurtidas() {
          const lista = await ObterMusicasCurtidas()
          if (lista.includes(props.id))
            definirCurtido(true)
        }
        obterCurtidas()
      }, [])

    async function playSound() {     
        let fonte = props.fonte
        
        console.log('Carregando');
        const { sound } = await Audio.Sound.createAsync(fonte);
           
        setSound(sound);
        console.log(props.genero);
        if (props.genero == "rock"){
          rock = String(Number(rock)+1)
          AsyncStorage.setItem('rock',rock)
        }
        else if (props.genero == "punk rock"){
          punk_rock = String(Number(punk_rock)+1)
          AsyncStorage.setItem('punk_rock',punk_rock)
        }
        else if (props.genero == "MPB"){
          mpb = String(Number(mpb)+1)
          AsyncStorage.setItem('MPB',mpb)
        }
        else if (props.genero == "pop"){
          pop = String(Number(pop)+1)
          AsyncStorage.setItem('pop',pop)
        }

        musicas = String(Number(musicas)+1)
        AsyncStorage.setItem('musicas',musicas)
        
        console.log(Math.max(Number(rock),Number(mpb),Number(pop),Number(punk_rock)))

        if (Math.max(Number(rock),Number(mpb),Number(pop),Number(punk_rock)) == Number(rock)){
          genero_mais_ouvido = 'Rock'
          AsyncStorage.setItem('genero_mais_ouvido',genero_mais_ouvido)
        }
        else if (Math.max(Number(rock),Number(mpb),Number(pop),Number(punk_rock)) == Number(punk_rock)) {
          genero_mais_ouvido = 'Punk rock'
          AsyncStorage.setItem('genero_mais_ouvido',genero_mais_ouvido)
        }
        else if (Math.max(Number(rock),Number(mpb),Number(pop),Number(punk_rock)) == Number(pop)) {
          genero_mais_ouvido = 'Pop'
          AsyncStorage.setItem('genero_mais_ouvido',genero_mais_ouvido)
        }
        else if (Math.max(Number(rock),Number(mpb),Number(pop),Number(punk_rock)) == Number(mpb)) {
          genero_mais_ouvido = 'MPB'
          AsyncStorage.setItem('genero_mais_ouvido',genero_mais_ouvido)
        }
        console.log(genero_mais_ouvido)

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