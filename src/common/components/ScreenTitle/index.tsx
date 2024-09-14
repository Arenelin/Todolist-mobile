import {Text, View} from "react-native";
import s from './styles'

type Props = {
    title: string
}

export const ScreenTitle = ({title}: Props) => {

    return (
        <View style={s.container}>
            <Text style={s.title}>
                {title}
            </Text>
        </View>

    );
};
