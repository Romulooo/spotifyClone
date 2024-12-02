import AsyncStorage from "@react-native-async-storage/async-storage"

export default async function SalvarMusicaCurtida(codigo) {
    try {
        const musicasCurtidas = await AsyncStorage.getItem("curtidos")
        const musicasCurtidasLista = JSON.parse(musicasCurtidas || "[]")

        if (musicasCurtidasLista.includes(codigo) === false) {
            musicasCurtidasLista.push(codigo)
        }

        const musicasCurtidasNovo = JSON.stringify(musicasCurtidasLista)
        await AsyncStorage.setItem("curtidos", musicasCurtidasNovo)
      }

    catch(erro) {
        console.log(erro)
    }
}