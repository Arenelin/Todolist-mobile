import {StyleSheet} from "react-native";

const s = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 14,
        marginBottom: 10,
        maxWidth: 278,
        // marginHorizontal: 'auto'
        justifyContent:'center',

    },
    taskTitle: {
        color: '#fffffe'
    },
    taskNameContainer:{
        maxWidth: 180,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        paddingRight: 10
    },
    taskIsDoneTitle: {
        textDecorationLine: 'line-through'
    },
    checkbox: {
        backgroundColor: 'red'
    },
    input: {
        paddingRight: 6,
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 8,
        maxWidth: 180
    }
});

export default s
