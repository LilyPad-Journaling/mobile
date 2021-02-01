import React, { useContext } from "react";
import {
  Text,
  TouchableOpacity,
  FlatList,
  View,
} from "react-native";
import { FontAwesome5 as FA5Icon } from "@expo/vector-icons/";

import { ColorContext } from "../../functions/providers/ColorContext";
import generalStyles from "../../styles/generalStyles";
import styles from "../../styles/journalListStyles";

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

// 1EB: OLD function compares today's date to the stored date for a given journal entry, then if false also checks which day of week the journal was created, returns string
// function dateToDay(date) {
//   if (new Date().toDateString() === date.toDateString()) {
//     return "Today";
//   } else {
//     switch (date.getDay()) {
//       case 1:
//         return "Monday";
//       case 2:
//         return "Tuesday";
//       case 3:
//         return "Wednesday";
//       case 4:
//         return "Thursday";
//       case 5:
//         return "Friday";
//       case 6:
//         return "Saturday";
//       default:
//         return "Sunday";
//     }
//   }
// }

// 2EB: OLD function used to convert firebase-stored timestamp to MDY format for journal list UI
// function dateToMDY(date) {
//   let month = date.getUTCMonth() + 1;
//   let day = date.getUTCDate();
//   let year = date.getUTCFullYear();
//   return month + "/" + day + "/" + year;
// }

function Entry(props) {
  const { color } = useContext(ColorContext);
  const { data } = props;
  let style = [{...styles.entry, backgroundColor: color.primary, borderColor: color.inactive}];

  if (props.style === "top") {
    style.push(styles.entryTop);
  } else if (props.style === "bottom") {
    style.push({ ...styles.entryBottom, borderBottomWidth: 0 });
  } else if (props.style === "both") {
    style.push(styles.entryTop);
    style.push(styles.entryBottom);
  }

  let description;
  if (props.private === true) {
    description = "This journal is private.";
  } else if (props.body.length <= 40) {
    description = props.body;
  } else {
    description = props.body.slice(0, 40) + "...";
  }

  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("Journal", { data: { ...data }})}
      style={[style, styles.entryContent]}
    >
      <View>
        <Text style={ {...styles.entryTitle, color: color.primaryText }}>{props.title}</Text>
        <Text style={{ color: color.inactive}}>{description}</Text>
      </View>
      <FA5Icon name='chevron-right' color={color.inactive} size={36} />
    </TouchableOpacity>
  );
}

function JournalList(props) {
  let journals = props.data;
  const { color } = useContext(ColorContext);

  for (let i = 0; i < journals.length; ++i) {
    // If this is the first entry or its date comes before the previous entry's date
    if (
      i === 0 ||
      dayjs(journals[i].timeCreated).format('MMDDYY') !==
      dayjs(journals[i - 1].timeCreated).format('MMDDYY')
    ) {
      // If this is the last entry or its date comes before the next entry's date
      if (
        i === journals.length - 1 ||
        dayjs(journals[i + 1].timeCreated).format('MMDDYY') !==
        dayjs(journals[i].timeCreated).format('MMDDYY')
      ) {
        journals[i].style = "both";
      } else {
        journals[i].style = "top";
      }
      // Otherwise, if this is the last entry or its date comes before the next entry's date
    } else if (
      i === journals.length - 1 ||
      dayjs(journals[i + 1].timeCreated).format('MMDDYY') !==
      dayjs(journals[i].timeCreated).format('MMDDYY')
    ) {
      journals[i].style = "bottom";
    }
  }

  let data = [];

  for (let i = 0; i < journals.length; i++) {
    if (
      data.length === 0 ||
      dayjs(data[data.length - 1][0].timeCreated).format('MMDDYY') !==
      dayjs(journals[i].timeCreated).format('MMDDYY')
    ) {
      data.push([journals[i]]);
    } else {
      data[data.length - 1].push(journals[i]);
    }
  }

  return (
    <>
    {data.length === 0 ? (
      <View>
        <Text>No journals yet, add one below!</Text>
      </View>
    ) : (
      <FlatList
      data={data}
      style={styles.topList}
      contentContainerStyle={styles.entryList}
      keyExtractor={(item) => item[0].timeCreated + item[0].id}
      renderItem={({ item }) => (
        <View>
          <Text
            style={{
              margin: 4,
              fontFamily: "medium",
              color: color.primaryText,
              fontSize: 16,
            }}
          >
            <Text>
             {/* 3EB: display day of journal entry */}
              {dayjs(item[0].timeCreated).format('dddd')}
              {"  "}
            </Text>
            <Text style={{ color: color.inactive, fontSize: 14 }}>
            {/* 4EB: display MDY of journal entry */}
              {dayjs(item[0].timeCreated).format('MM/DD/YY')}
            </Text>
          </Text>
          <FlatList
            style={{ ...generalStyles.shadow, shadowColor: color.shadow }}
            data={item}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Entry
                title={item.title}
                body={item.body}
                private={item.private}
                navigation={props.navigation}
                style={item.style}
                data={item}
              />
            )}
          />
        </View>
      )}
    />
    )}
    </>
  );
}

export default JournalList;
