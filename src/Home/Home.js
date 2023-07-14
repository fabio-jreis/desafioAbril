import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Container, Title, Search, Icon, Repos, Divider,
    ContainerItem, ContainerAvatarTitle, Avatar, TitleContainer, TitleItem, Subtitle, NumOfStar 

} from "./styles";

import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import { TextInput } from "react-native-gesture-handler";

import findIcon from "../../assets/images/magnifyingglass.png"

import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const [input, setInput] = useState("")
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [finalList, setFinalList] = useState(false)
    const [page, setPage] = useState(1);

    const readRepo = () => {
        if(input !== "") {
            setData([])
            setLoading(true)
            setFinalList(false)
            api.get(`search/repositories?q=${input}&per_page=20`).then(response => {
               var items = response?.data?.items;
               setData(items)
               
               if(response?.data?.items?.length < 20) {
                setFinalList(true)
               } else {
                setPage(page + 1)
               }
             }).catch(e => {
               console.log('erro 01 ' + e)
             }).finally(() => {
               setLoading(false)
             })        
        }
    }

    const readMoreRepo = () => {
        if(!finalList) {
            setLoading(true)
            api.get(`search/repositories?q=${input}&per_page=20&page=${page}`).then(response => {
    
                var items = response?.data.items || {};

                if(items.length < 20) {
                    setFinalList(true)
                }

                var newData = [...data, ...items];
            
                setData(newData)
                setPage(page + 1)
              }).catch(e => {
                console.log('error: ' + e)
              }).finally(() => {
                setLoading(false)
              })       

        }
    }

    const RepoItem = ({data}) => {

        const dispatch = useDispatch()
        const navigation = useNavigation()
      
        async function dispatchRepo() {
          dispatch({
            type: 'REPOSITORY_SAGA_SUCCESS',
            payload: { owner: data.owner.login, name: data.name }
          })
          navigation.navigate('Details')
        }

        return (
            <ContainerItem
            onPress={dispatchRepo}
            >
            <ContainerAvatarTitle>
                <Avatar
                testID='avatar'
                source={{
                    uri: data?.owner?.avatar_url || "",
                }} />
                <TitleContainer>
                <TitleItem testID='name'>{data?.name || ""}</TitleItem>
                <Subtitle testID='owner'>{data?.owner?.login || ""}</Subtitle>
                </TitleContainer>
            </ContainerAvatarTitle>
            <NumOfStar testID='stars'>{data?.stargazers_count || 0}</NumOfStar>
            </ContainerItem>
        )
    }

    return(
        <Container>
            <Title></Title>
            <Search>
                <Icon source={findIcon} />
                <TextInput 
                    placeholder="Busca por Repositórios"
                    value={input}
                    onChangeText={input => {
                        setInput(input);
                    }} 
                    onBlur={ () => {readRepo()} }   
                />                
            </Search>

            <FlatList
                data={data}
                keyExtractor={data => data.id}
                renderItem={({ item }) => (
                    <RepoItem data={item} />
                )}
                ItemSeparatorComponent={<Divider />}
                refreshing={loading}
                onRefresh={() => readRepo()}
                onEndReachedThreshold={0.25}
                onEndReached={() => readMoreRepo()}
                showsVerticalScrollIndicator={false}                
            />
        </Container>
    )
}
