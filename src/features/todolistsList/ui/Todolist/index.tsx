import {View} from "react-native";
import {TodolistEntity} from "common/types";
import s from './styles'
import {TasksList} from "./ui/TasksList";
import {TodolistHeader} from "./ui/TodolistHeader";
import {AddTaskForm} from "./ui/AddTaskForm";

type Props = {
    todolist: TodolistEntity
}

export const Todolist = ({todolist}: Props) => {

    return (
        <View style={s.container}>
            <TodolistHeader title={todolist.title} todolistId={todolist.id}/>
            <TasksList todolistId={todolist.id}/>
            <AddTaskForm todolistId={todolist.id}/>
        </View>
    );
};
