import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    navegador: {
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 100,
        position: "absolute",
        width: "100%",
        zIndex: 999,
    },
    navegadorIcone: {
        height: 32,
        width: 32
    },
    musica: {
        display: "inline-flex"
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
    }
})

