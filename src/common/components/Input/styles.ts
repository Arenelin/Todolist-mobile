import {StyleSheet} from "react-native";

const s = StyleSheet.create({
    root: {
        width: '100%',
    },
    inputContainer: {
        position: 'relative',
        width: '100%',
    },
    label: {
        position: 'absolute',
        left: 12,
        top: 6,
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 1.2,
        color: '#BCBCBCFF',
    },
    labelDisabled: {
        color: '#FFFFFF33',
    },
    iconStart: {
        position: 'absolute',
        bottom: 9,
        left: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF66',
    },
    activeIconStart: {
        color: '#FFFFFFFF',
    },
    disabledIconStart: {
        color: '#FFFFFF33',
    },
    input: {
        width: '100%',
        paddingRight: 8,
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 10,
        fontWeight: '400',
        color: '#FFFFFFCC',
        backgroundColor: 'inherit',
        borderWidth: 1,
        borderColor: '#FFFFFF33',
        borderRadius: 8,
        fontSize: 18,
    },
    searchInput: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 42,
        paddingRight: 35,
    },
    errorInput: {
        borderColor: '#FF3D00FF',
    },
    iconEnd: {
        position: 'absolute',
        right: 10,
        bottom: 22,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
    },
    buttonEnd: {
        position: 'absolute',
        right: 12,
        bottom: 12,
    },
    errorMessage: {
        marginTop: 4,
        fontSize: 16,
        color: '#FF3D00FF'
    },
});

export default s
