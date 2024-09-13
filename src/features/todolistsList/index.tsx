import {FlatList, StyleSheet, Text, View} from "react-native";
import {Button, Loader} from "common/components";
import {Todolist} from "./ui/Todolist";
import {AddTodolistForm} from "./ui/AddTaskForm";
import {useGetTodolistsQuery, useLogoutMutation} from "services";


export const TodolistList = () => {
    const {data: todolists, isLoading} = useGetTodolistsQuery()
    const [logout] = useLogoutMutation()

    return (
        <View style={s.container}>
            <AddTodolistForm />
            <View style={s.logoutButtonContainer}>
                <Button variant={'secondary'} onPress={() => logout()}>
                    <Text style={s.logoutButtonCaption}>Logout</Text>
                </Button>
            </View>
            {isLoading ? <Loader/> : <>
                <FlatList
                    data={todolists}
                    renderItem={({item}) =>
                        <Todolist todolist={item}/>
                    }
                    keyExtractor={item => item.id.toString()}
                />
            </>}
        </View>
    );
};


const s = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#16161a',
        paddingTop: 50,
        position: 'relative'
    },
    logoutButtonContainer: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    logoutButtonCaption: {
        fontSize: 22,
        color: '#ffffff',
    }
})

