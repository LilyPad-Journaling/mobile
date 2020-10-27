import React, { useContext } from 'react';
import {
    Text, TouchableOpacity, StyleSheet, FlatList
} from 'react-native';
import { color } from '../../functions/providers/ColorContext';

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
    for (let i = 0; i < props.data.length; ++i) {
        // If this is the first entry or its date comes before the previous entry's date
        if (i === 0 || props.data[i].date.getTime() !== props.data[i-1].date.getTime()) {
            // If this is the last entry or its date comes before the next entry's date
            if (i === props.data.length - 1 || props.data[i+1].date.getTime() !== props.data[i].date.getTime()) {
                props.data[i].style = 'both';
            } else {
                props.data[i].style = 'top';
            }
        // Otherwise, if this is the last entry or its date comes before the next entry's date
        } else if (i === props.data.length - 1 || props.data[i+1].date.getTime() !== props.data[i].date.getTime()) {
            props.data[i].style = 'bottom';
        }
    }

    let data = [];

    for (entry of props.data) {
        if (data.length === 0 || data[data.length-1][0].date.getTime() !== entry.date.getTime()) {
            data.push([entry]);
        } else {
            data[data.length-1].push(entry);
        }
    }

    return <FlatList
        data={data}
        keyExtractor={item => item[0].date.toString()}
        renderItem={({item, index, separators}) => (
            <FlatList 
                data={item}
                keyExtractor={item => item.title}
                renderItem={({item, index, separators}) => (
                    <Entry title={item.title} description={item.description} navigation={props.navigation} style={item.style}/>
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