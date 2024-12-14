import React, { useEffect, useState } from "react"
import { View, Pressable, Image, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import AsyncStorage from "@react-native-async-storage/async-storage"

import { Audio } from 'expo-av';

import Estilo from "../styles/Estilo"

import SalvarMusicaCurtida from "../functions/SalvarMusicaCurtida";
import ObterMusicasCurtidas from "../functions/ObterMusicasCurtidas";
import LimparMusicaCurtida from "../functions/LimparMusicaCurtida";

let musicas = '0', rock = '0', punk_rock = '0', mpb = '0', pop = '0', genero_mais_ouvido = ''
AsyncStorage.setItem('punk_rock',punk_rock)
AsyncStorage.setItem('mpb',mpb)
AsyncStorage.setItem('pop',pop)
AsyncStorage.setItem('rock',rock)
AsyncStorage.setItem('musicas',musicas)
AsyncStorage.setItem('genero_mais_ouvido','Nenhum')

let globalSound = null; // ALTERAÇÃO

export default function Conteudo(props) {
  const [curtido, definirCurtido] = useState(false);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function Curtir() {
    if (curtido) LimparMusicaCurtida(props.id)
    else SalvarMusicaCurtida(props.id)
    definirCurtido(!curtido)
  }

  // Carrega as músicas curtidas na montagem do componente
  useEffect(() => {
    async function obterCurtidas() {
      const lista = await ObterMusicasCurtidas();
      if (lista.includes(props.id)) {
        definirCurtido(true);
      }
    }
    obterCurtidas();
  }, [props.id]);


  // Função para tocar ou pausar a música
  async function togglePlayPause() {
    setIsLoading(true);
    try {
      if (sound && isPlaying) {
        console.log("Pausando som...");
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        console.log(musicas)
        atualizarEstatisticas()
        musicas = String(Number(musicas)+1)
        await AsyncStorage.setItem('musicas',musicas)

        //V
        if (globalSound && globalSound !== sound) {
          console.log("Pausando som global ativo...");
          await globalSound.pauseAsync();
          setIsPlaying(false);
        }
        //^

        if (!sound) {
          console.log("Carregando som...");
          const { sound: newSound } = await Audio.Sound.createAsync(props.fonte);
          setSound(newSound);
          globalSound = newSound; // ALTERAÇÃO
          console.log("Som carregado com sucesso");

          newSound.setOnPlaybackStatusUpdate((status) => {
            if (status.didJustFinish) {
              setIsPlaying(false);
            }
          });
          
          await newSound.playAsync();
          console.log("Som reproduzindo...");
          setIsPlaying(true);
        } else {
          console.log("Reproduzindo som...");
          await sound.playAsync();
          setIsPlaying(true);
        }
      }
    } catch (error) {
      console.error("Erro ao reproduzir som:", error);
    } finally {
      setIsLoading(false);
    }
  }

    // Atualiza estatísticas de gênero e músicas tocadas
    async function atualizarEstatisticas() {
      switch (props.genero) {
        case "rock":
          rock=String(Number(rock)+1);
          AsyncStorage.setItem('rock',rock)
          break;
        case "punk rock":
          punk_rock=String(Number(punk_rock)+1);
          AsyncStorage.setItem('punk_rock',punk_rock)
          break;
        case "pop":
          pop=String(Number(pop)+1);
          AsyncStorage.setItem('pop',pop)
          break;
        case "MPB":
          mpb=String(Number(mpb)+1);
          AsyncStorage.setItem('mpb',mpb)
          break;
      }

      // Determina o gênero mais ouvido
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
    }

      // Limpa o som ao desmontar o componente
      useEffect(() => {
        return () => {
          if (sound) {
            sound.unloadAsync();
          }
        };
      }, [sound]);

    

    return <View>
        <View>
            <Pressable style={Estilo.musica} onPress={() => {
                togglePlayPause()
            }}>
                <Image style={ Estilo.musicaIcone } source={ props.imagem } />
                <Text style={[ Estilo.musicaTitulo, { color: isPlaying ? "#34eb43" : "#fff" }]}> { props.nome } </Text>
                <Text style={[ Estilo.musicaBanda, { color: isPlaying ? "#34eb43" : "#fff"} ]}> { props.banda } </Text>
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