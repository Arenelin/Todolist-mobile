import {Pressable, StyleSheet, View} from "react-native";
import {EditableTitle} from "./EditableTitle";
import {Checkbox} from "expo-checkbox";
import {TaskEntity, TaskStatus} from "types";
import {X} from "lucide-react-native";
import {useDeleteTaskMutation, useUpdateTaskMutation} from "services";


type Props = {
    item: TaskEntity
    todolistId: string
}

export const Task = ({item, todolistId}: Props) => {
    const [deleteTask] = useDeleteTaskMutation()
    const [updateTask] = useUpdateTaskMutation()
    const onChangeStatusTask = () => {
        updateTask({
            todolistId,
            taskId: item.id,
            title: item.title,
            status: item.status === TaskStatus.NotCompleted
                ? TaskStatus.Completed
                : TaskStatus.NotCompleted
        })
    }
    const onChangeTitle = (newTitle: string) => {
        updateTask({
            todolistId,
            taskId: item.id,
            title: newTitle,
            status: item.status
        })
    }
    const onDeleteTask = () => {
        deleteTask({todolistId, taskId: item.id})
    }
    const isCompletedTask = item.status === TaskStatus.Completed

    return (
        <View style={s.container}>
            <Checkbox
                color={'#7f5af0'}
                value={isCompletedTask}
                onValueChange={onChangeStatusTask}
            />
            <EditableTitle currentTitle={item.title} changeTitle={onChangeTitle} isDone={isCompletedTask}/>
            <View style={s.actionsContainer}>
                <Pressable onPress={onDeleteTask}>
                    <X color={'white'}/>
                </Pressable>
            </View>
        </View>
    );
};

const s = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
    },
    actionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
})
