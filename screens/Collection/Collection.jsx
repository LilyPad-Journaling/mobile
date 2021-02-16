import React, { useContext } from "react"
import { View, Text, FlatList, Image } from "react-native"

import { UserContext } from "../../functions/providers/UserContext"
import { ColorContext } from "../../functions/providers/ColorContext";


const Collection = () => {
    const { awards } = useContext(UserContext)
    const { color } = useContext(ColorContext)

    return (
        <View style={{ height: '100%', width: '100%', backgroundColor: color.background }}>
            <FlatList
                data={awards}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ width: '100%', height: 70, flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Image style={{ height: 50, width: 50, marginHorizontal: 20, marginVertical: 10 }} source={{ uri: item.image}} />
                        <Text style={{ marginVertical: 27, color: color.primaryText }}>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default Collection