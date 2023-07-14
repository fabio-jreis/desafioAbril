import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';

export const Container = styled.SafeAreaView`
        width: 100%;
        height: 100%;
        background-color: #FFF;
        padding: 16px 0px 0px 0px;
`;

export const Web = styled(WebView)`
    background-color: #FFF;
`