import React from 'react'
import { View, Text, FlatList, Dimensions } from "react-native";

export const ApartmentList = props => {

    const array = [
        {
            id: 1,
            apartment_name: "test",
            apartment_details: "test details",
            apartment_type: "test type",
            storey: "2 floors",
            status: 'created',
            location: "taguig",
            number_of_rooms: 4,
            owner: "castaloni",
            timestamps: null
        },
        {
            id: 1,
            apartment_name: "test",
            apartment_details: "test details",
            apartment_type: "test type",
            storey: "2 floors",
            status: 'created',
            location: "taguig",
            number_of_rooms: 4,
            owner: "castaloni",
            timestamps: null
        },
        {
            id: 1,
            apartment_name: "test",
            apartment_details: "test details",
            apartment_type: "test type",
            storey: "2 floors",
            status: 'created',
            location: "taguig",
            number_of_rooms: 4,
            owner: "castaloni",
            timestamps: null
        }
    ]

    const renderData = ({item}) => {
        
        return(
            <View style={{width:Dimensions.get('screen').width * .9, padding: 10, backgroundColor:"blue", marginTop: 5, borderRadius: 5}}>
                <Text>{item.apartment_name}</Text>
            </View>
        )
    }

    return(
        <FlatList
            style={{width: "100%"}}
            data={array}
            renderItem={renderData}
            contentContainerStyle={{
                flex: 1,
                alignItems:"center",
                width:"100%"
            }}
        />
    )
}