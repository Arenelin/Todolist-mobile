import {Text, View} from "react-native";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {AuthForm, authSchema} from "common/types";
import {useLoginMutation} from "services";
import {Button, Input} from "common/components";
import {Eye, EyeOff} from "lucide-react-native";
import {InputType} from "common/types/components";
import s from './styles'

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
                            iconEnd={<Eye color={'#ffffff'}/>}
                            switchableIconEnd={<EyeOff color={'#ffffff'}/>}
                        />
                    )}
                    name="password"
                />
                <Button style={s.button} onPress={handleSubmit(login)}>
                    <Text style={s.buttonCaption}>Sign In</Text>
                </Button>
            </View>
        </View>
    );
};
