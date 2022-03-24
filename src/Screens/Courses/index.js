import api from "../../Services/api";
import React, {useState, useEffect } from "react";
import {StyleSheet, Text, ScrollView} from "react-native";
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { Container, CategoriesText } from "./style";
import Footer from "../../Components/Footer";


export default function Courses(props){

const id = props.route.params.id
const title = props.route.params.title
const content = props.route.params.content
const [dataCourse, setDataCourse] = useState([])
const { width } = useWindowDimensions();
const source = {
    html: `${content}`
  };

    useEffect(() => {
        api.get(`posts/${id}`)
                .then(response => {
                    setDataCourse(response.data)
                    console.log(id)
                }).catch(error => {
                    console.log(error)
                })
    }, [])
    
    return(
    <ScrollView key={id} style={{backgroundColor: '#FFF'}}>
        <Container>
               <CategoriesText>{title}</CategoriesText>
               <RenderHtml
                contentWidth={width}
                source={source}
               />
        </Container>
        <Footer/>
    </ScrollView>
    )
}