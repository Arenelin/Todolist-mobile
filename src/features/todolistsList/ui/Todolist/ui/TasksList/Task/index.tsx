import {Text, View} from "react-native";
import {Checkbox} from "expo-checkbox";
import {AddEntityForm, TaskEntity, TaskStatus} from "common/types";
import {SquareCheck, X} from "lucide-react-native";
import {useDeleteTaskMutation, useUpdateTaskMutation} from "services";
import {useState} from "react";
import {AddEntityTitleForm, Button} from "common/components";
import {ButtonVariant} from "common/types/components";
import s from './styles'

type Props = {
    item: TaskEntity
    todolistId: string
}

export const Task = ({item, todolistId}: Props) => {
    const [deleteTask] = useDeleteTaskMutation()
    const [updateTask] = useUpdateTaskMutation()
    const [isEditMode, setIsEditMode] = useState(false)
    const isCompletedTask = item.status === TaskStatus.Completed

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
    const changeEditMode = () => {
        setIsEditMode(!isEditMode)
    }
    const changeTitle = ({title}: AddEntityForm) => {
        changeEditMode()
        onChangeTitle(title.trim() ? title : item.title)
    }

    return (
        <View style={s.container}>
            <Checkbox
                color={'#7f5af0'}
                value={isCompletedTask}
                onValueChange={onChangeStatusTask}
            />
            <View style={s.taskNameContainer}>
                {isEditMode
                    ? <AddEntityTitleForm
                        onSubmit={changeTitle}
                        submitButtonChildren={<SquareCheck color={'#ffffff'}/>}
                        isNeedAutoFocus
                        inputStyle={s.input}
                        buttonVariant={ButtonVariant.IconButton}
                        defaultValue={item.title}
                    />
                    : <Text
                        onLongPress={changeEditMode}
                        style={[s.taskTitle, isCompletedTask && s.taskIsDoneTitle]}>
                        {item.title}
                    </Text>}
            </View>
            {!isEditMode &&
                <Button
                    variant={ButtonVariant.IconButton}
                    onPress={onDeleteTask}>
                    <X color={'#ffffff'}/>
                </Button>}
        </View>
    );
};
