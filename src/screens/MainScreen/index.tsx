import * as React from 'react';
import Background from '../../components/background';
import { Container, SubTitle, TextContainer, Title } from './style';
import Texts from '../../assets/strings';
import Button from '../../components/button';

const MainScreen = () => {
    return (
        <Background>
            <Container>
                <TextContainer>
                    <Title>{Texts.main.title}</Title>
                    <SubTitle>{Texts.main.subTitle}</SubTitle>
                </TextContainer>
                <Button
                    title="OK"
                    action={() => { }}
                />
            </Container>
        </Background>
    )
}

export default MainScreen;