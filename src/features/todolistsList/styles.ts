import {StyleSheet} from "react-native";

const s = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#16161a',
        paddingTop: 50,
        position: 'relative'
    },
    logoutButtonContainer: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    logoutButtonCaption: {
        fontSize: 22,
        color: '#ffffff',
    }
});

export default s
