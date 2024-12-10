import React, { useEffect, useState } from "react"
import { View, Pressable, Image, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import AsyncStorage from "@react-native-async-storage/async-storage"

import { Audio } from 'expo-av';

import Estilo from "../styles/Estilo"

import SalvarMusicaCurtida from "../functions/SalvarMusicaCurtida";
import ObterMusicasCurtidas from "../functions/ObterMusicasCurtidas";
import LimparMusicaCurtida from "../functions/LimparMusicaCurtida";

let musicas = '0'

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
        
        atualizarEstatisticas(props.genero)
        setIsLoading(true);
        try {
          if (sound && isPlaying) {
            console.log("Pausando som...");
            await sound.pauseAsync();
            setIsPlaying(false);
          } else {
            console.log(musicas)
            musicas = String(Number(musicas)+1)
            AsyncStorage.setItem('musicas',musicas)
            if (!sound) {
              console.log("Carregando som...");
              const { sound: newSound } = await Audio.Sound.createAsync(props.fonte);
              setSound(newSound);
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
      async function atualizarEstatisticas(genero) {
        const generos = ["Rock", "Punk rock", "MPB", "Pop"];
        const stats = {};

        for (const key of generos) {
          const value = await AsyncStorage.getItem(key);
          stats[key] = Number(value || "0");
        }

        stats[genero] = stats[genero] + 1;
        stats["musicas"] = (stats["musicas"] || 0) + 1;

        for (const key in stats) {
          await AsyncStorage.setItem(key, String(stats[key]));
        }

        // Determina o gênero mais ouvido
        const generoMaisOuvido = generos.reduce((a, b) => (stats[a] > stats[b] ? a : b));
        await AsyncStorage.setItem("genero_mais_ouvido", generoMaisOuvido);
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