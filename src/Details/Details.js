import React, { useEffect } from "react";
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { resetRepository } from '../storage/redux/reducer/repositorySlice'
import { Container, Web } from './styles'

export default function Details() {

    const dispatch = useDispatch()
    const repository = useSelector(state => state.repository)

    useEffect(() => {
        return () => { dispatch(resetRepository()) }
    }, [])


    return(
        <Container>
            <Web testID="urlRepo" source={{ uri: repository.url}} />
        </Container>
    )
}