import { StyleSheet } from 'react-native';
import { color } from '../functions/providers/ColorContext';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.primary,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%"
    },
    button: {
        height: 50,
        width: 50,
        borderRadius: 25,
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: color.highlight,
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        fontSize: 24,
        color: color.primaryText,
        marginBottom: 30 
    },
    subHeaderText: {
        fontSize: 16,
        color: color.primaryText,
        marginBottom: 40,
        textAlign: "center",
        marginHorizontal: 30
    }
});

export default styles;

