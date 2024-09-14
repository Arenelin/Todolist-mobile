import {Controller, useForm} from "react-hook-form";
import {AddEntityForm, addEntitySchema} from "common/types";
import {zodResolver} from "@hookform/resolvers/zod";
import {PressableStateCallbackType, StyleProp, TextStyle, ViewStyle} from "react-native";
import {ReactNode} from "react";
import {ButtonVariant} from "common/types/components";
import {Input} from "../Input";
import {Button} from "../Button";

type Props = {
    inputStyle?: StyleProp<TextStyle>
    isNeedResetForm?: boolean
    isNeedAutoFocus?: boolean
    onSubmit: (formData: AddEntityForm) => void
    submitButtonChildren: ReactNode
    isLoading?: boolean
    buttonStyle?: StyleProp<ViewStyle> | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>)
    inputPlaceholder?: string
    defaultValue?: string
    buttonVariant?: ButtonVariant
}

export const AddEntityTitleForm = (props: Props) => {
    const {
        inputStyle,
        isNeedResetForm,
        onSubmit,
        submitButtonChildren,
        isLoading,
        buttonStyle,
        inputPlaceholder,
        defaultValue = '',
        buttonVariant,
        isNeedAutoFocus
    } = props

    const {
        handleSubmit,
        control,
        reset,
        formState: {errors}
    } = useForm<AddEntityForm>({
        resolver: zodResolver(addEntitySchema),
        mode: 'onTouched',
        defaultValues: {title: defaultValue}
    });
    const onSubmitHandler = (formData: AddEntityForm) => {
        onSubmit(formData)
        isNeedResetForm && reset()
    }

    return (
        <>
            <Controller
                control={control}
                rules={{required: true}}
                render={({field: {onChange, value}}) => (
                    <Input
                        placeholder={inputPlaceholder}
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors?.title?.message}
                        style={inputStyle}
                        autoFocus={isNeedAutoFocus}
                    />
                )}
                name="title"
            />
            <Button
                variant={buttonVariant}
                style={buttonStyle}
                onPress={handleSubmit(onSubmitHandler)}
                disabled={isLoading}>
                {submitButtonChildren}
            </Button>
        </>
    );
};
