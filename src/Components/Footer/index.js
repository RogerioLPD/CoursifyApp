import React from "react";
import {Image, Linking} from "react-native";
import {Container, FooterText, Button, ButtonText} from './style'
import logo from '../Assets/logo-coursify-w.png'

const coursifyURL = 'https://coursify.me/?locale=pt-BR'

export default function Footer(){
    return(
        <Container>
            <Image source={logo}/>
            <FooterText>
                O Coursify.me é uma plataforma de ensino à distância,
                onde qualquer pessoa ou empresa pode construir seu
                EAD e vender cursos pela internet.
            </FooterText>
            <Button
            onPress={() => Linking.openURL(coursifyURL, '_blank')}
            >
                <ButtonText>Quero conhecer a plataforma!</ButtonText>
            </Button>
        </Container>
    )
}