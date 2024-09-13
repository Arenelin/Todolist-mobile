import {StyleSheet} from "react-native";

const s = StyleSheet.create({
    menu: {
        backgroundColor: '#535b67',
        color: '#636b73',

    },
    deleteContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    menuItemText: {
        color: '#fffffe',
        fontSize: 16,
        fontWeight: '500'
    },
    deleteIcon: {
        color: 'crimson'
    },
    anchorButton: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    editTitleContainer: {
        flexDirection: 'column',
        rowGap: 10,
        position: 'relative',
        backgroundColor: 'red'
    },
    crossButton: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    anchorIcon:{
        color:'#ffffff',
        marginTop: 6,
        marginRight: 6
    }
})

export default s
