import api from "../../Services/api";
import React, {useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import {FlatList, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import Posts from "../../Components/Posts";
import {CategoriesContainer, CategoriesText, Container} from './styles'
import Footer from "../../Components/Footer";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from "react-native-web";


export default function Home(){

const [dataCategories, setDataCategories] = useState([])
const navigation = useNavigation(); 
const [list, setList] = useState(dataCategories);


    useEffect(() => {
        api.get(`categories/`)
                .then(response => {
                    setDataCategories(response.data)

                }).catch(error => {
                    console.log(error)
                })
    }, [])
    const handleOrderClick = () => {
        let newList = [...dataCategories];
    
        newList.sort((a, b) => (a.name > b.name ? 1 : b.name> a.name ? -1 : 0));
    
        setList(newList);
      };
      const handleOrderClickb = () => {
        let newList = [...dataCategories];
    
        newList.sort((a, b) => (b.name > a.name ? -1 : a.name> b.name ? -1 : 0));
    
        setList(newList);
      }
    
    return(
      
    <SafeAreaView style={{backgroundColor: '#FFF'}}>
      
       <Container>
        <SafeAreaView style={styles.textContainer}>
            <Text style={styles.text}>ORDENAR POR:</Text>
            <TouchableOpacity onPress={handleOrderClick} style={{position: 'absolute', right: 80, alignSelf: 'center'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#696969'}}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOrderClick} style={{position: 'absolute', right: 35, alignSelf: 'center'}}>
  
          <MaterialCommunityIcons
            name="order-alphabetical-ascending"
            size={28}
            color="#888"
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOrderClickb} style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
          <MaterialCommunityIcons
            name="order-alphabetical-descending"
            size={28}
            color="#888"
            />
            </TouchableOpacity>
        </SafeAreaView>
        </Container>
        
            {dataCategories.lenght < 1 ? null :
            <FlatList 
            data={list}
            keyExtractor={(item) => {return item.id}}
            renderItem={({item}) => (
              
            <Container>
              
                <CategoriesContainer>
                    <CategoriesText numberOfLines={1}>{item.name}</CategoriesText>
                    <TouchableOpacity
                    onPress={() => 
                    {navigation.push('CoursesFromCategory',
                    {category_id: item.id,
                    category_name: item.name
                    })}}
                    >
                        <Text>VER MAIS ➤</Text>
                    </TouchableOpacity>
                </CategoriesContainer>   
            <ScrollView horizontal={true} pagingEnabled={false}>
                <Posts categoryId={item.id}
                />
                
            </ScrollView>
            </Container>
            )}
            ListFooterComponent={() => <Footer/>}
            />
            
        }
    </SafeAreaView>
    
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      width: '100%',
      backgroundColor: '#FFF'
    },
    
    textContainer:{
      flexDirection: 'row',
      marginVertical: '5%',
      marginHorizontal: '5%'
      

    },
    text:{
      fontSize: 15,
      marginHorizontal: '1%',
      fontWeight: 'bold',
      color: '#696969'


      
  
    }
  });