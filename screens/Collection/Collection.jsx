import React, { useContext } from "react"
import { View, Text, FlatList, Image } from "react-native"

import { UserContext } from "../../functions/providers/UserContext"

const Collection = () => {
    const { awards } = useContext(UserContext)

    return (
        <View style={{ height: '100%', width: '100%' }}>
            <FlatList
                data={awards}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ width: '100%', height: 50, flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Image style={{ height: 50, width: 50, marginHorizontal: 20, marginVertical: 10 }} source={{ uri: item.image}} />
                        <Text style={{ marginVertical: 10 }}>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default Collection