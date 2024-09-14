import {StyleSheet} from "react-native";

const s = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#16161a',
        marginHorizontal: 'auto',
        flex: 1
    },
    form: {
        rowGap: 20,
        maxWidth: 320,
        width: '100%',
        marginHorizontal: 'auto',
        marginVertical: 0,
        height: '100%',
        justifyContent: 'center',
        flex: 1
    },
    button: {
        marginTop: 12,
        padding: 10

    },
    buttonCaption: {
        color: '#fffffe',
        fontWeight: '500',
        fontSize: 18
    },
});

export default s
