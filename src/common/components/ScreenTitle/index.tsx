import {Text, StyleSheet} from "react-native";

type Props = {
    title: string
}

export const ScreenTitle = ({title}: Props) => {

    return (
        <Text style={s.title}>
            {title}
        </Text>
    );
};

const s = StyleSheet.create({
    title: {
        color: '#fffffe',
        fontSize: 20,
        fontWeight: '700'
    }
})
