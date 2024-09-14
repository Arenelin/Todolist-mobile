import {Text, View} from "react-native";
import s from './styles'
import {TodolistMenu} from "./TodolistMenu";

type Props = {
    title: string
    todolistId: string
}

export const TodolistHeader = ({title, todolistId}: Props) => {

    return (
        <>
            <View style={s.titleContainer}>
                <Text style={s.title}>{title}</Text>
            </View>
            <View style={s.menuContainer}>
                <TodolistMenu todolistId={todolistId} prevTitle={title}/>
            </View>
        </>

    );
};
