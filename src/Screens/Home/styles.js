import styled from "styled-components";
import { theme } from "../../Components/Util/theme";

export const Container = styled.View`
    margin: 20px;
    background-color: #FFF;
`

export const CategoriesContainer = styled.View`
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const CategoriesText = styled.Text`
color: ${theme.colors.green80};
text-transform: uppercase;
font-weight: bold;
font-size: 20px;
max-width: 300px;
`
