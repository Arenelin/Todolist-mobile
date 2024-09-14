import {ActivityIndicator, View} from "react-native";
import s from './styles'

export const Loader = () => {

    return (
        <View style={[s.container, s.horizontal]}>
            <ActivityIndicator size="large" color="#7f5af0" />
        </View>
    );
};
