import styled from "styled-components";
import { theme } from "../../Components/Util/theme";

export const Container = styled.View`
    margin: 10px;
`

export const ReadMoreText = styled.Text`
    color: ${theme.colors.orange80};
`
export const CategoriesText = styled.Text`
color: ${theme.colors.green80};
text-transform: uppercase;
font-weight: bold;
font-size: 20px;
max-width: 300px;
`
export const PostTitle = styled.Text`
    color: ${theme.colors.green80};
    font-weight: bold;
    max-width: 200px;
`
export const HTMLContent = styled.View`
    max-height: 100px;
    max-width: 250px;
`