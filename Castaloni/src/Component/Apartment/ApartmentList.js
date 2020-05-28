import React from 'react'
import { View, Text, FlatList, Dimensions, Image, TouchableOpacity, ImageBackground } from "react-native";
import { RegularTheme } from '../../Theme/Theme';
import LinearGradient from 'react-native-linear-gradient';
export const ApartmentList = props => {



    const renderData = ({ item }) => {
        
        return (
            <TouchableOpacity>
                <ImageBackground
                    // resizeMode="contain"
                    source={{ uri: item.domain + item.filename }}
                    style={[RegularTheme.Shadow, RegularTheme.ApartmentList]}>

                    {/* <Image
                        resizeMode="contain"
                        style={{ width: "100%", height: "100%" }}
                        source={{ uri: item.domain + item.filename }} /> */}

                    <LinearGradient 
                        // start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        colors={['transparent', '#000']}
                        style={[{
                                 opacity: 0.7,
                                width: Dimensions.get('screen').width * .9,
                                height: Dimensions.get('screen').height * .3
                     }]}/>

                        <View style={[{ position: "absolute", bottom: 10, left: 10, backgroundColor: "transparent" }]}>
                        <Image
                        resizeMode="contain"
                        style={{ width: 20, height: 20, tintColor: "#fff" }}
                        source= {require('../../assets/images/home.png')} />
                            <Text style={{ color: "#fff", fontWeight: "bold" }}>{item.apartment_name}</Text>
                            <Text style={{ color: "#fff"}}>Rooms available: {item.available}</Text>
                        </View>


                      
                
            

                    {/* <View style={{ position: "absolute", bottom: 20, right: 10, backgroundColor: "#fff", padding: 10, borderRadius: 4 }}>
                        <Text>Available: {item.available}</Text>
                    </View> */}

                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{flex: 1}}>
            <FlatList
                //   pagingEnabled={true
            
                showsVerticalScrollIndicator={false}
                // horizontal={true}
                style={{ width: "100%", padding: 10 }}
                data={props.data}
                renderItem={renderData}
                contentContainerStyle={{
                    // flexGrow: 1,
                }}
            />
        </View>
    )
}