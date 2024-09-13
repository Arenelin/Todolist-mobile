import {ActivityIndicator, View, StyleSheet} from "react-native";

type Props = {}

export const Loader = ({}: Props) => {

    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#7f5af0" />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#16161a',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});
