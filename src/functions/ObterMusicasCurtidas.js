import AsyncStorage from "@react-native-async-storage/async-storage"

export default async function ObterMusicasCurtidas() {
    try {
        const musicasCurtidas = await AsyncStorage.getItem("curtidos")
        const musicasCurtidasLista = JSON.parse(musicasCurtidas || "[]")
        
        return musicasCurtidasLista
    }
      
    catch(erro) {
        console.log(erro)
    }  

    
}