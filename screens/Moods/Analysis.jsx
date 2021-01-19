import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

import { ColorContext } from "../../functions/providers/ColorContext";
import IconButton from "../../components/General/Button";
import generalStyles from "../../styles/generalStyles";

const windowWidth = Dimensions.get("window").width;

const data = [
  {
    name: "Mood",
  },
  {
    name: "Anxiety",
  },
  {
    name: "Energy",
  },
  {
    name: "Activity",
  },
];

export default function Analysis(props) {
  const { navigation } = props;
  const { color } = useContext(ColorContext);

  return (
    <View style={[styles.container, { backgroundColor: color.background }]}>
      <FlatList
        data={data}
        style={{width: '100%'}}
        contentContainerStyle={{ marginTop: 5, paddingBottom: 20, justifyContent: 'center', marginLeft: Dimensions.get("window").width*.0375 }}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={{ fontSize: 18, margin: 7, color: color.primaryText }}>{item.name}</Text>
              <View style={[generalStyles.shadow, styles.graph, { backgroundColor: color.primary, shadowColor: color.shadow }]}>
                <LineChart
                  data={{
                    labels: [
                      "Thurs.",
                      "Fri.",
                      "Sat.",
                      "Sun.",
                      "Mon.",
                      "Tues.",
                      "Wed."
                    ],
                    datasets: [
                      {
                        data: [
                          Math.round(Math.random() * 10),
                          Math.round(Math.random() * 10),
                          Math.round(Math.random() * 10),
                          Math.round(Math.random() * 10),
                          Math.round(Math.random() * 10),
                          Math.round(Math.random() * 10),
                          Math.round(Math.random() * 10),
                        ],
                      },
                    ],
                  }}
                  width={Dimensions.get("window").width*.925 } // from react-native
                  height={220}
                  yAxisMax={10}
                  fromZero={true}
                  yAxisInterval={2} // optional, defaults to 1
                  chartConfig={{
                    backgroundGradientFrom: color.primary,
                    backgroundGradientTo: color.primary,
                    decimalPlaces: 1, // optional, defaults to 2dp
                    color: (opacity = 1) => color.inactive,
                    labelColor: (opacity = 1) => color.primaryText,
                    style: {
                      borderRadius: 16,
                      backgroundColor: "none",
                    },
                    propsForDots: {
                      r: "6",
                      strokeWidth: "6",
                      stroke: "green",
                    },
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                  }}
                />
              </View>
            </View>
          );
        }}
      />
      <IconButton
        onPress={() => navigation.navigate("Track")}
        icon="plus"
        size={36}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  graph: {
    width: windowWidth * 0.925,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
});
