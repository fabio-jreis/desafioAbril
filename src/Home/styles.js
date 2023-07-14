import styled from 'styled-components/native';

export const Container = styled.View`
    margin-left: 16px;
    margin-right: 16px;
`;

export const Title = styled.Text`

`;

export const Icon = styled.Image`
    margin-left: 8px;
    margin-right: 6px;
`;

export const Search = styled.View`
    flex-direction: row;
    align-items: center;
    height: 36px;
    background: rgba(118, 118, 128, 0.12);
    border-radius: 10px;
`;

export const Divider = styled.View`
width: 100%;
height: 1px;
background: #EBEBEB;
border-radius: 2px;
margin-top: 12px;
margin-bottom: 10px;
`;

export const ContainerItem =  styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
  `;

export const ContainerAvatarTitle = styled.View`
    flex-direction: row;
    flex: 8;
  `;

export const Avatar =  styled.Image`
    width: 52px;
    height: 52px;
    background: #D9D9D9;
    border-radius: 50px;
    margin-right: 12px;
  `;

export const TitleContainer = styled.View`
    flex: 1;
    margin-right: 5px;
  `;

export const TitleItem = styled.Text.attrs({
    numberOfLines: 1
  })`
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.38px;
    color: '#000';
    margin-bottom: 1px;
  `;

export const Subtitle = styled.Text.attrs({
    numberOfLines: 1
  })`
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: '#48484A';
  `;

export const NumOfStar = styled.Text.attrs({
    numberOfLines: 1
  })`
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.078px;
    color: '#48484A';
    flex: 2;
    text-align: right;
    margin-right: 4px;
  `;