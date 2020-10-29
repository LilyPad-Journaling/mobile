import React, { useContext } from 'react';
import {
    Text, TouchableOpacity, StyleSheet, FlatList, View
} from 'react-native';
import { color } from '../../functions/providers/ColorContext';

function dateToDay(date) {
    if (new Date().toDateString() === date.toDateString()) {
        return "Today";
    } else {
        switch (date.getDay()) {
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
            default:
                return "Sunday";
        }
    }
}

function dateToMDY(date) {
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();
    return month + "/" + day + "/" + year
}

function Entry(props) {

    let style = [styles.entry];

    if (props.style === 'top') {
        style.push(styles.entryTop);
    }
    if (props.style === 'bottom') {
        style.push(styles.entryBottom);
    }
    if (props.style === 'both') {
        style.push(styles.entryTop);
        style.push(styles.entryBottom);
    }

    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate('Journal')}
            style={style}
        >
            <Text style={styles.entryTitle}>{props.title}</Text>
            <Text style={styles.entryDescription}>{props.description}</Text>
        </TouchableOpacity>
    )

}


function JournalList(props) {

    let journals = props.data.reverse()

    for (let i = 0; i < journals.length; ++i) {
        // If this is the first entry or its date comes before the previous entry's date
        if (i === 0 || journals[i].date.getTime() !== journals[i - 1].date.getTime()) {
            // If this is the last entry or its date comes before the next entry's date
            if (i === journals.length - 1 || journals[i + 1].date.getTime() !== journals[i].date.getTime()) {
                journals[i].style = 'both';
            } else {
                journals[i].style = 'top';
            }
            // Otherwise, if this is the last entry or its date comes before the next entry's date
        } else if (i === journals.length - 1 || journals[i + 1].date.getTime() !== journals[i].date.getTime()) {
            journals[i].style = 'bottom';
        }
    }

    let data = [];

    for (entry of journals) {
        if (data.length === 0 || data[data.length - 1][0].date.getTime() !== entry.date.getTime()) {
            data.push([entry]);
        } else {
            data[data.length - 1].push(entry);
        }
    }

    return <FlatList
        data={data}
        keyExtractor={item => item[0].date.toString()}
        renderItem={({ item, index, separators }) => (
            <FlatList
                data={item}
                keyExtractor={item => item.title}
                ListHeaderComponent={() => (
                    <Text style={{fontWeight: "bold"}}>
                        <Text>{dateToDay(item[0].date)}</Text>
                        <Text> </Text>
                        <Text style={{color: color.inactive}}>{dateToMDY(item[0].date)}</Text>
                    </Text>
                )}
                renderItem={({ item, index, separators }) => (
                    <Entry title={item.title} description={item.description} navigation={props.navigation} style={item.style} />
                )}
            />
        )}
    />

}

export default JournalList;

const styles = StyleSheet.create({
    entry: {
        height: 80,
        width: 300,
        borderColor: color.inactive,
        borderWidth: 1,
        backgroundColor: color.primary,
        borderBottomWidth: 0
    },
    entryTop: {
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25
    },
    entryBottom: {
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomWidth: 1
    },
    entryTitle: {
        marginLeft: 10,
        marginTop: 10
    },
    entryDescription: {
        marginLeft: 10,
        color: color.inactive
    }
});