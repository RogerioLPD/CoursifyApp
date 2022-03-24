import api from "../../Services/api";
import React, {useState, useEffect } from "react";
import {FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import {ReadMoreText, CategoriesText, HTMLContent, PostTitle, Container} from './styles'
import { useNavigation } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import Media from "../../Components/Media";

export default function CoursesFromCategory(props){

const [dataPosts, setDataPosts] = useState([])
const category_id = props.route.params.category_id
const category_name = props.route.params.category_name
const navigation = useNavigation();
const { width } = useWindowDimensions();


    useEffect(() => {
        api.get(`posts?categories=${category_id}&per_page=25`)
                .then(response => {
                    setDataPosts(response.data)
                }).catch(error => {
                    console.log(error)
                })
    }, [])
    
    return(
    <SafeAreaView style={{backgroundColor: '#FFF'}}>
        <Container>
            <CategoriesText>{category_name}</CategoriesText>
            {dataPosts.lenght < 1 ? null :
            <FlatList
           data={dataPosts}
           keyExtractor={(item) => {return item.slug}}
           renderItem={({item}) => (
            <TouchableOpacity 
            onPress={() => 
            {navigation.push('Courses',
            {id: item.id,
            title: item.title.rendered,
            content: item.content.rendered
            })}}>
                <Container>
                    <Media
                    MediaId={item.featured_media}
                    />
                <PostTitle numberOfLines={2}>{item.title.rendered}</PostTitle>
                    <HTMLContent>
                        <RenderHtml
                        contentWidth={width}
                        source={{html: `${item.excerpt.rendered}`}}
                        />
                    </HTMLContent>
                <ReadMoreText
                
                    >Leia mais</ReadMoreText>
                </Container>
            </TouchableOpacity>
            )}
       />}   
        </Container>
    </SafeAreaView>
    )
}