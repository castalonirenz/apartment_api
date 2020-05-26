import React from 'react'
import { View, Text, FlatList, Dimensions, Image } from "react-native";
import { RegularTheme } from '../../Theme/Theme';

export const ApartmentList = props => {



    const renderData = ({ item }) => {

        return (
            <View
                style={[RegularTheme.Shadow, {
                    width: Dimensions.get('screen').width * .9,
                    padding: 10, backgroundColor: "#f6f7e8",
                    marginLeft: 15, borderRadius: 5, marginRight: 15,
                    height: Dimensions.get('screen').height * .3,
                    alignItems:"center",
                    justifyContent:"center"
                }]}>

                <Image
                    resizeMode="contain"
                    style={{width: "100%", height: "80%"}} 
                    source={{uri: item.domain + item.filename}} />

                <Text>{item.apartment_name}</Text>
                <Text>{item.storey}</Text>
                <Text>{item.location}</Text>

            </View>
        )
    }

    return (
        <View>
            <FlatList
                //   pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
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