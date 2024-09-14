import {FlatList, Text, View} from "react-native";
import {Button, Loader} from "common/components";
import {Todolist} from "./ui/Todolist";
import {AddTodolistForm} from "./ui/AddTodolistForm";
import {useGetTodolistsQuery, useLogoutMutation} from "services";
import {ButtonVariant} from "common/types/components";
import s from './styles'

export const TodolistsList = () => {
    const {data: todolists, isLoading} = useGetTodolistsQuery()
    const [logout] = useLogoutMutation()

    return (
        <View style={s.container}>
            <AddTodolistForm/>
            <View style={s.logoutButtonContainer}>
                <Button variant={ButtonVariant.Secondary} onPress={() => logout()}>
                    <Text style={s.logoutButtonCaption}>Logout</Text>
                </Button>
            </View>
            {isLoading
                ? <Loader/>
                : <FlatList
                    data={todolists}
                    renderItem={({item}) => <Todolist todolist={item}/>}
                    keyExtractor={item => item.id}
                />
            }
        </View>
    );
}
