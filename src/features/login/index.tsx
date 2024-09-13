import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {AuthForm, authSchema} from "types";
import {useLoginMutation} from "services";

import {Input} from "common/components";
import {Eye, EyeOff} from "lucide-react-native";
import {InputType} from "common/components/Input/types";


export const Login = () => {
    const {
        handleSubmit,
        control,
        formState: {errors}
    } = useForm<AuthForm>({
        resolver: zodResolver(authSchema),
        mode: 'onTouched',
        defaultValues: {email: '', password: ''}
    });
    const [login] = useLoginMutation()

    return (
        <View style={s.container}>
            <View style={s.form}>
                <Controller
                    control={control}
                    rules={{required: true}}
                    render={({field: {onChange, value}}) => (
                        <Input
                            placeholder="Email"
                            onChangeText={onChange}
                            value={value}
                            errorMessage={errors?.email?.message}
                        />
                    )}
                    name="email"
                />
                <Controller
                    control={control}
                    rules={{required: true}}
                    render={({field: {onChange, value}}) => (
                        <Input
                            placeholder="Password"
                            onChangeText={onChange}
                            value={value}
                            type={InputType.password}
                            errorMessage={errors?.password?.message}
                            iconEnd={<Eye color={'white'}/>}
                            switchableIconEnd={<EyeOff color={'white'}/>}
                        />
                    )}
                    name="password"
                />
                <TouchableOpacity style={s.button} onPress={handleSubmit(login)} activeOpacity={0.5}>
                    <Text style={s.buttonCaption}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

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
        backgroundColor: '#7f5af0',
        alignItems: 'center',
        borderRadius: 12,
        paddingVertical: 12,
        marginTop: 12
    },
    buttonCaption: {
        color: '#fffffe',
        fontWeight: '500',
        fontSize: 18
    },
})
