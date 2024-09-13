import {useInput} from './useInput';
import {Text, TextInput, View} from "react-native";
import {Props} from "./types";

export const Input = (props: Props) => {
    const {
        disabled,
        errorMessage,
        iconEnd,
        iconStart,
        id,
        label,
        onClickIconEndHandler,
        switchableIconEnd,
        type,
        value,
        onClickButtonHandler,
        isError,
        style,
        ...rest
    } = props;
    const {
        baseClassNames, currentInputType, finalIconEnd, textFieldId,
    } = useInput({
        style,
        disabled,
        iconEnd,
        iconStart,
        id,
        onClickIconEndHandler,
        switchableIconEnd,
        type,
        value,
    });

    return (
        <View style={baseClassNames.root}>
            <View style={baseClassNames.inputContainer}>
                <TextInput
                    editable={!disabled}
                    id={textFieldId}
                    value={value}
                    secureTextEntry={currentInputType === 'password'}
                    autoComplete={'off'}
                    placeholderTextColor={'#fffffe'}
                    {...rest}
                    style={baseClassNames.input}
                />
                {!!iconStart && <Text style={baseClassNames.iconStart}>{iconStart}</Text>}
                {finalIconEnd}
            </View>
            {!!errorMessage && (
                <Text
                    style={baseClassNames.errorMessage}
                >
                    {errorMessage}
                </Text>
            )}
        </View>
    );
};

Input.displayName = 'Input';
