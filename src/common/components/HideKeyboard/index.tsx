import {ReactNode} from "react";
import {Keyboard, TouchableWithoutFeedback} from "react-native";

type Props = {
    children: ReactNode
}

export const HideKeyboard = ({children}: Props) => {

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
            {children}
        </TouchableWithoutFeedback>
    );
};
