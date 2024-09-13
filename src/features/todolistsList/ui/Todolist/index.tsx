import {Button, FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import {AddEntityForm, addEntitySchema, TodolistEntity} from "types";
import {Input, Loader} from "common/components";
import {Task} from "../Task";
import {TodolistMenu} from "./ui/TodolistMenu";
import {useState} from "react";
import {SquarePlus} from "lucide-react-native";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useCreateTaskMutation, useGetTasksQuery} from "services";

type Props = {
    todolist: TodolistEntity
}

export const Todolist = ({todolist}: Props) => {
    const {data, isLoading} = useGetTasksQuery({todolistId: todolist.id})
    const [isAddingNewTaskMode, setIsAddingNewTaskMode] = useState(false)
    const [createTask] = useCreateTaskMutation()
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
    const changeMode = () => {
        setIsAddingNewTaskMode(!isAddingNewTaskMode)
    }
    const onAddTask = ({title}: AddEntityForm) => {
        createTask({todolistId: todolist.id, title})
        reset()
        changeMode()
    }

    return (
        <View style={s.container}>
            <Text style={s.title}>{todolist.title}</Text>
            <View style={s.menuContainer}>
                <TodolistMenu todolistId={todolist.id} prevTitle={todolist.title}/>
            </View>

            {isLoading ? <Loader/> : <FlatList
                data={data?.items}
                renderItem={({item}) =>
                    <Task item={item} todolistId={todolist.id}/>
                }
                keyExtractor={item => item.id.toString()}
            />}
            {isAddingNewTaskMode ? <View style={s.addTaskContainer}>
                <Controller
                    control={control}
                    rules={{required: true}}
                    render={({field: {onChange, value}}) => (
                        <Input
                            placeholder="Type a new task title"
                            onChangeText={onChange}
                            value={value}
                            errorMessage={errors?.title?.message}
                            style={s.input}
                        />
                    )}
                    name="title"
                />
                <SquarePlus size={34} color={'#7f5af0'} onPress={handleSubmit(onAddTask)}/>
            </View> : <Pressable style={s.button} onPress={changeMode}>
                <Text style={s.buttonCaption}>Add new task</Text>
            </Pressable>}
        </View>
    );
};

const s = StyleSheet.create({
    container: {
        minWidth: 320,
        borderStyle: 'solid',
        borderColor: '#fffffe',
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 20,
        marginBottom: 20,
        borderRadius: 10,
        position: 'relative'
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: '#fffffe',
        textAlign: 'center',
        marginBottom: 20
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    menuContainer: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    buttonCaption: {
        color: 'white',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#7f5af0',
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 20
    },
    addTaskContainer: {
        maxWidth: 240,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    input:{
        paddingTop: 16,
        paddingBottom: 16
    }
})
