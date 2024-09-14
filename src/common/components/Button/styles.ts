import {StyleSheet} from "react-native";

const s = StyleSheet.create({
    button: {
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
        paddingHorizontal: 28,
        borderRadius: 4,
    },
    primary: {
        backgroundColor: '#7f5af0',
    },
    secondary: {
        backgroundColor: '#94A1B2',
    },
    fullWidth: {
        width: '100%',
    },
    iconButton: {
        padding: 0,
        paddingHorizontal: 0
    }
});

export default s
