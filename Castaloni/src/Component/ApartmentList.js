import React from 'react'
import { View, Text, FlatList, Dimensions, Image, TouchableOpacity, ImageBackground, ScrollView, RefreshControl } from "react-native";
import { RegularTheme } from '../Theme/Theme';
import LinearGradient from 'react-native-linear-gradient';
import { EmptyComponent } from "./index";
export const ApartmentList = props => {


const whichData = (item) => {

    if(props.list == "apartment"){
        return item.images.map((image, index) => {

                        return (
                            <TouchableOpacity
                                style={{ marginLeft: index >= 1 ? 10 : 0 }} >
                                <ImageBackground
                                    // resizeMode="contain"
                                    source={{ uri: image.domain + image.filename }}
                                    style={[RegularTheme.Shadow, RegularTheme.ApartmentList]}>

                                    <LinearGradient
                                        colors={['transparent', '#000']}
                                        style={[{
                                            opacity: 0.7,
                                            width: Dimensions.get('screen').width * .9,
                                            height: Dimensions.get('screen').height * .3
                                        }]} />

                                    <View style={[{ position: "absolute", bottom: 20, left: 20, backgroundColor: "transparent" }]}>
                                        <Image
                                            resizeMode="contain"
                                            style={{ width: 20, height: 20, tintColor: "#fff" }}
                                            source={require('../assets/images/home.png')} />
                                        <Text style={{ color: "#fff", fontWeight: "bold" }}>{item.apartment_name}</Text>
                                        <Text style={{ color: "#fff" }}>Rooms available: {item.available}</Text>
                                    </View>

                                </ImageBackground>
                            </TouchableOpacity>
                        )
                    })

    }
    else{
        
        return(

            <TouchableOpacity
                style={{ marginLeft: 10 }} >
                <ImageBackground
                    // resizeMode="contain"
                    source={{ uri: item.domain + item.filename }}
                    style={[RegularTheme.Shadow, RegularTheme.ApartmentList]}>

                    <LinearGradient
                        colors={['transparent', '#000']}
                        style={[{
                            opacity: 0.7,
                            width: Dimensions.get('screen').width * .9,
                            height: Dimensions.get('screen').height * .3
                        }]} />

                    <View style={[{ position: "absolute", bottom: 20, left: 20, backgroundColor: "transparent" }]}>
                        <Image
                            resizeMode="contain"
                            style={{ width: 20, height: 20, tintColor: "#fff" }}
                            source={require('../assets/images/home.png')} />
                        <Text style={{ color: "#fff", fontWeight: "bold" }}>{item.room_details}</Text>
                        <Text style={{ color: "#fff" }}>Rent: {item.rent_price}</Text>
                        <Text style={{ color: "#fff" }}>Available: {item.available == 1 ? "Yes" : "No"}</Text>
                    </View>

                </ImageBackground>
            </TouchableOpacity>
        )
    }
}


    const renderData = ({ item }) => {
        return (

             <View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    horizontal={true} >

                        {whichData(item)}
                  
                </ScrollView>
             
             </View>


        )
    }

   
    

    return (
        <View style={{flex: 1}}>
            <FlatList
                //   pagingEnabled={true
               refreshControl={
                   <RefreshControl refreshing={props.refreshing} onRefresh={props.onRefresh}/>
               }
                ListEmptyComponent={EmptyComponent}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                // horizontal={true}
                style={{ width: "100%", padding: 10 }}
                data={props.data}
                renderItem={renderData}
                contentContainerStyle={{
                    flexGrow: 1,
                }}
            />
        </View>
    )
}