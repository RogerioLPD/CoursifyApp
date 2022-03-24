import api from "../../Services/api";
import React, {useState, useEffect } from "react";
import { View, FlatList, ScrollView, SafeAreaView} from "react-native";
import {PostImage} from './style'

export default function Media({MediaId}){

const [dataMedia, setDataMedia] = useState([])

    useEffect(() => {
        api.get(`media/${MediaId}`)
                .then(response => {
                    setDataMedia([response.data])
                }).catch(error => {
                    console.log(error)
                })
    }, [])
    
    return(
    <SafeAreaView style={{backgroundColor: '#FFF'}}>
        <View>
            <ScrollView>
                {dataMedia.lenght < 1 ? null :
                <FlatList
                data={dataMedia}
                keyExtractor={(item) => {return item.id}}
                renderItem={({item}) => (
                    <PostImage source={{uri: item.media_details.sizes.thumbnail.source_url}}/>
                )}
                />
                }
            </ScrollView>
        </View>
    </SafeAreaView>
    )
}