import {useState} from 'react';
import {useGetId} from "common/hooks";
import {ButtonVariant, InputProps, InputType} from "common/types/components";
import s from './styles'
import {Button} from "../Button";

type UseInputParams = InputProps;

export const useInput = (params: UseInputParams) => {
    const {
        disabled,
        iconEnd,
        isError,
        iconStart,
        id,
        onClickIconEndHandler,
        switchableIconEnd,
        type = InputType.text,
        value,
        style
    } = params;

    const baseClassNames = {
        iconEnd: [s.iconEnd],
        iconStart: [
            s.iconStart,
            disabled && s.disabledIconStart,
            !!value && !isError && s.activeIconStart,
        ],
        input: [
            s.input,
            isError && s.errorInput,
            iconStart && s.searchInput,
            style,
        ],
        inputContainer: [s.inputContainer],
        label: [s.label, disabled && s.labelDisabled],
        root: [s.root],
        errorMessage: [s.errorMessage],
    };

    const textFieldId = useGetId(id);
    const isPassword = type === InputType.password;
    const [isShowPassword, setIsShowPassword] = useState(false);

    const onClickHandler = () => {
        if (isPassword) {
            setIsShowPassword((prevState) => !prevState);
        } else {
            onClickIconEndHandler?.();
        }
    };

    const isSearch = type === InputType.search;

    const eyeForCurrentPasswordDisplay = isShowPassword ? iconEnd : switchableIconEnd;
    const getCurrentInputType = (inputType: InputType, isShowPass: boolean) =>
        (isPassword && isShowPass ? InputType.text : inputType);
    const currentInputType = getCurrentInputType(type, isShowPassword);

    const currentIconEnd = iconEnd && (
        <Button
            variant={ButtonVariant.IconButton}
            style={baseClassNames.iconEnd}
            disabled={disabled}
            onPress={onClickHandler}
        >
            {switchableIconEnd ? eyeForCurrentPasswordDisplay : iconEnd}
        </Button>
    );
    const iconEndForSearch = !!value && isSearch && currentIconEnd;
    const iconEndForRest = !isSearch && currentIconEnd;
    const finalIconEnd = iconEndForSearch || iconEndForRest;

    return {
        baseClassNames,
        currentInputType,
        finalIconEnd,
        textFieldId,
    };
};
