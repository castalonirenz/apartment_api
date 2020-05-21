import React from 'react'
import { View, Text, FlatList, Dimensions } from "react-native";
import { RegularTheme } from '../../Theme/Theme';

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
                data={array}
                renderItem={renderData}
                contentContainerStyle={{
                    // flexGrow: 1,
                }}
            />
        </View>
    )
}