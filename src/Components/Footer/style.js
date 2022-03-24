import styled from "styled-components";
import { theme } from "../Util/theme";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: ${theme.colors.green80};
    flex: 1;
    align-items: center;
    
`
export const FooterText = styled.Text`
    text-align: center;
    color: #FFF;
    font-size: 12px;
`
export const Button = styled.TouchableOpacity`
    padding: 15px;
    padding-left: 25px;
    padding-right: 25px;
    background-color: ${theme.colors.orange80};
    align-self: center;
    margin-top: 30px;
    border-radius: 20px;
`

export const ButtonText = styled.Text`
    align-self: center;
    color: #FFF;
`