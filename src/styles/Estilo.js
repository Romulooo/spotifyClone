import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    titulo: {
        top: 16,
        left: 16,
        marginBottom: 48,
        fontSize: 32,
        fontWeight: 700,
        color: "#fff",
    },
    subtitulo: {
        left: 16,
        fontSize: 26,
        fontWeight: 500,
        color: "#fff",
    },
    informação: {
        color: "#34eb43"
    },
    navegador: {
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 50,
        position: "absolute",
        width: "100%",
        zIndex: 999,
    },
    navegadorIcone: {
        height: 32,
        width: 32
    },
    musica: {
        display: "inline-flex",
        width: "80%"
    },
    musicaIcone: {
        height: 64,
        width: 64,
        marginLeft: 16,
        top: 0
    },
    musicaTitulo: {
        fontSize: 18,
        fontWeight: 500,
        bottom: "60%",
        left: 92,
        color: "#fff"
    },
    musicaBanda: {
        fontSize: 12,
        fontWeight: 300,
        bottom: "50%",
        left: 92,
        color: "#fff"
    },
    musicaLike: {
        height: 32,
        width: 32,
        right: 32,
        top: -100,
        position: "absolute"
    },
    semLikes: {
        fontSize: 32,
        width: "100%",
        textAlign: "center",
        color: "#fff",
        fontWeight: 100,
    },
})

