import {StyleSheet} from "react-native";

const s = StyleSheet.create({
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
    editTitleContainer: {
        flexDirection: 'column',
        rowGap: 20,
        position: 'relative',
    },
    crossButton: {
        position: 'absolute',
        top: -10,
        right: -10,
        padding: 5,
        paddingHorizontal: 5
    },
    overlayStyle: {
        width: 270,
        minHeight: 170
    },
    editTitle: {
        textAlign: 'center',
        fontSize: 20,
        color: '#ffffff'
    },
    saveButtonCaption: {
        color: '#ffffff',
        fontSize: 16
    },
    input: {
        paddingTop: 10,
        paddingBottom: 10
    },
    saveButton: {
        padding: 10
    }
})

export default s
