import api from "../../Services/api";
import React, {useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity, SafeAreaView} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { PostContainer, PostTitle, HTMLContent, ReadMoreText} from './style'
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import Media from "../Media";

export default function Posts({categoryId}){

const [dataPosts, setDataPosts] = useState([])
const navigation = useNavigation();
const { width } = useWindowDimensions();

    useEffect(() => {
        api.get(`posts?categories=${categoryId}&per_page=10`)
                .then(response => {
                    setDataPosts(response.data)
                }).catch(error => {
                    console.log(error)
                })
    }, [])
    
    return(
    <SafeAreaView>
        <View>
            {dataPosts.lenght < 1 ? null :
            <FlatList
            horizontal
            pagingEnabled={true}
            data={dataPosts}
            keyExtractor={(item) => {return item.id}}
            renderItem={({item}) => (
                <TouchableOpacity
                onPress={() => 
                {navigation.push('Courses',
                {id: item.id,
                title: item.title.rendered,
                content: item.content.rendered,
                description: item.excerpt.rendered
                })}}>
                    <PostContainer>
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
                        <ReadMoreText>Leia mais</ReadMoreText>
                    </PostContainer>
                </TouchableOpacity>
            )}
       />}
        </View>
    </SafeAreaView>
    )
}