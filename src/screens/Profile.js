import React from "react"
import { ScrollView, StatusBar, View, Text, Image } from "react-native"
import Navegador from "../components/Navegador"

import Estilo from "../styles/Estilo";

export default function Profile({ navigation }) {
    return( <View backgroundColor="#2e2e2e">
        <StatusBar barStyle="light-content"/>
        <Navegador navigation={navigation}/>
        <ScrollView pagingEnabled>
        <Text style = {Estilo.titulo} >Perfil</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
            

        </ScrollView>
    </View>
    );  
}