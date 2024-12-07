import AsyncStorage from "@react-native-async-storage/async-storage"

export default async function LimparMusicaCurtida(codigo) {
    try {
        const musicasCurtidas = await AsyncStorage.getItem("curtidos")
        const musicasCurtidasLista = JSON.parse(musicasCurtidas || "[]")

        const musicaCurtidaRemovida = musicasCurtidasLista.filter(function(musica) {
            return musica != codigo
        })

        const musicasCurtidasNovo = JSON.stringify(musicaCurtidaRemovida)
        await AsyncStorage.setItem("curtidos", musicasCurtidasNovo)
    }
    
    catch(erro) {
        console.log(erro)
    }
}