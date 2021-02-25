import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, FlatList, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

import { ColorContext } from "../../functions/providers/ColorContext";
import { UserContext } from "../../functions/providers/UserContext";
import IconButton from "../../components/General/Button";
import generalStyles from "../../styles/generalStyles";


const windowWidth = Dimensions.get("window").width;

const data = [
  {
    name: "Anxiety",
  },
  {
    name: "Energy",
  },
  {
    name: "Activity",
  },
  {
    name: "Stress",
  },
];

export default function Analysis(props) {
  const { navigation } = props;
  const { color } = useContext(ColorContext);
  const { moods } = useContext(UserContext);
  // const [interval, setInterval] = useState(5); //useState? set weekly/monthly
  // weekly - 7 days
  // monthly - 6 months or diff btwn first and last entry if < 6, use avg of entries from that month

  // moods.map((mood) => ({
  //   ...mood,
  //   difference: new Date().toDateString()-mood.timeCreated
  // }))

  //c/p for reference
//   moodsData.map((mood) => ({
//     ...mood,
//     timeCreated: mood.timeCreated
//     // 4EB: Checks whether timestamp for timeCreated exists
//         ? mood.timeCreated
//         : getTimestamp()
// }))

  const fakeData = [
    {y: Math.round(Math.random() * 10), x: 1},
    {y: Math.round(Math.random() * 10), x: 2},
    {y: Math.round(Math.random() * 10), x: 3},
    {y: Math.round(Math.random() * 10), x: 4},
    {y: Math.round(Math.random() * 10), x: 5},
    {y: Math.round(Math.random() * 10), x: 6},
    {y: Math.round(Math.random() * 10), x: 7},
  ]

  // const ChartPoints = ({x, y}) =>
  //   fakeData.map((item, index) => (
  //   <Image source = {{uri: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/78037/lily-pad-clipart-md.png'}}/>
  // ));
    /* <AreaChart
    style = {{height: '70%'}}
    data = {fakeData}
    yAccessor = {({item}) => item.y}
    xAccessor = {({item}) => item.x}
    svg = {{fill: '#003F5A'}}
    numberOfTicks = {10}
    yMin = {0}
    yMax = {10}
  >
  </AreaChart> */

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
                        data: fakeData.map(o => o.y)
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
                      r: "10",
                      strokeWidth: "4",
                      stroke: "#006400",
                      fill: "green"
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