import React, { useContext } from "react";
import { View, FlatList } from "react-native";

import styles from "../../styles/resourceStyles";
import Resource from "./Resource";

import { ColorContext } from "../../functions/providers/ColorContext";

const categories = [
  {
    name: "Stress Relief",
    contents: [
      {
        title: "Kung Fu Tea",
        source: "6th and Wash",
        url:
          "https://www.healthline.com/health/breathing-exercises-for-anxiety",
        starred: false,
      },
      {
        title: "Axe Throwing",
        source: "the roof",
        url: "https://www.medicalnewstoday.com/articles/326115",
        starred: true,
      },
      {
        title: "Screaming into the Void",
        source: "anywhere you want",
        url:
          "https://thoughtcatalog.com/january-nelson/2019/01/50-surprisingly-simple-coping-mechanisms-to-chase-away-anxiety/",
        starred: false,
      },
    ],
  },
  {
    name: "Exercise",
    contents: [
      {
        title: "Planet Fitness",
        source: "600ish Washington Street",
        url:
          "https://www.google.com/search?sxsrf=ALeKk00HdKw6tszuba8PcHJP2gxt40ZlqQ%3A1604820779370&source=hp&ei=K5-nX8GaEPKg_QaZy4ywBQ&q=sports&oq=sports&gs_lcp=CgZwc3ktYWIQAzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIKCC4QxwEQowIQQzIECAAQQzoECCMQJzoFCAAQkQI6CAgAELEDEIMBOggILhCxAxCDAToCCAA6BAguECc6BwguECcQkwI6BAguEENQ7ARYjAtg9wxoAHAAeACAAaUCiAGDCpIBBTAuMy4zmAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwiB3Oejt_LsAhVyUN8KHZklA1YQ4dUDCAk&uact=5",
        starred: false,
      },
      {
        title: "Gravity Vault Rock Climbing",
        source: "the other end of hoboken",
        url:
          "https://www.google.com/search?sxsrf=ALeKk00HdKw6tszuba8PcHJP2gxt40ZlqQ%3A1604820779370&source=hp&ei=K5-nX8GaEPKg_QaZy4ywBQ&q=sports&oq=sports&gs_lcp=CgZwc3ktYWIQAzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIKCC4QxwEQowIQQzIECAAQQzoECCMQJzoFCAAQkQI6CAgAELEDEIMBOggILhCxAxCDAToCCAA6BAguECc6BwguECcQkwI6BAguEENQ7ARYjAtg9wxoAHAAeACAAaUCiAGDCpIBBTAuMy4zmAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwiB3Oejt_LsAhVyUN8KHZklA1YQ4dUDCAk&uact=5",
        starred: false,
      },
    ],
  },
  {
    name: "Meditation",
    contents: [
      {
        title: "bwè kafe",
        source: "10th i think",
        url: "https://en.wikipedia.org/wiki/Ohm",
        starred: false,
      },
    ],
  },
  {
    name: "Yoga",
    contents: [
      {
        title: "Yoga Class from Home",
        source: "your living room",
        url:
          "https://www.yogajournal.com/practice/16-yoga-poses-find-instant-calm-peace",
        starred: false,
      },
    ],
  },
];

export default function Local(props) {
  const { color } = useContext(ColorContext);

  return (
    <View style={{ ...styles.container, backgroundColor: color.background }}>
      <FlatList //flatlist of categories
        style={{ width: "100%" }}
        contentContainerStyle={{
          width: "95%",
          marginLeft: "2.5%",
          paddingBottom: 20,
        }}
        data={categories}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return <Resource item={item} />;
        }}
      />
    </View>
  );
}
