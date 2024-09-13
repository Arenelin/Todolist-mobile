import {StyleSheet, View, Text} from "react-native";
import {Controller, useForm} from "react-hook-form";
import {Button, Input} from "common/components";
import {AddEntityForm, addEntitySchema} from "types";
import {zodResolver} from "@hookform/resolvers/zod";
import {useCreateTodolistMutation} from "services";


export const AddTodolistForm = () => {
    const [createTodolist, {isLoading}] = useCreateTodolistMutation()

    const {
        handleSubmit,
        control,
        reset,
        formState: {errors}
    } = useForm<AddEntityForm>({
        resolver: zodResolver(addEntitySchema),
        mode: 'onTouched',
        defaultValues: {title: ''}
    });
    const onAddNewTodolist = ({title}: AddEntityForm) => {
        createTodolist({title})
        reset()
    }

    return (
        <View style={s.formContainer}>
            <Controller
                control={control}
                rules={{required: true}}
                render={({field: {onChange, value}}) => (
                    <Input
                        placeholder="Type a new todolist title"
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors?.title?.message}
                    />
                )}
                name="title"
            />
            <Button onPress={handleSubmit(onAddNewTodolist)} disabled={isLoading}>
                <Text style={s.buttonCaption}>
                    Add new todolist
                </Text>
            </Button>
        </View>
    );
};


const s = StyleSheet.create({
    formContainer: {
        rowGap: 15,
        paddingTop: 30,
        marginBottom: 50
    },
    input: {},
    buttonsContainer: {
        marginVertical: 20
    },
    buttonCaption: {
        color: '#ffffff'
    }
})
