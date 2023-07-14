import React from "react";
import { Container, Title, Search, Icon } from "./styles";

import { View, Text, StyleSheet, Image } from 'react-native'
import { TextInput } from "react-native-gesture-handler";

import findIcon from "../../assets/images/magnifyingglass.png"

export default function Home() {
    return(
        <Container>
            <Title></Title>
            <Search>
                <Icon source={findIcon} />
                <TextInput placeholder="Busca por Repositórios"/>                
            </Search>
        </Container>
    )
}
