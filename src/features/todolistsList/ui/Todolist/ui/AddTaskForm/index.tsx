import {Text, View} from "react-native";
import s from './styles'
import {AddEntityTitleForm, Button} from "common/components";
import {SquarePlus} from "lucide-react-native";
import {ButtonVariant} from "common/types/components";
import {AddEntityForm} from "common/types";
import {useState} from "react";
import {useCreateTaskMutation} from "services";

type Props = {
    todolistId: string
}

export const AddTaskForm = ({todolistId}: Props) => {
    const [isAddingNewTaskMode, setIsAddingNewTaskMode] = useState(false)
    const [createTask] = useCreateTaskMutation()

    const changeMode = () => {
        setIsAddingNewTaskMode(!isAddingNewTaskMode)
    }
    const onAddTask = ({title}: AddEntityForm) => {
        createTask({todolistId, title})
        changeMode()
    }

    return (
        <>
            {isAddingNewTaskMode
                ? <View style={s.addTaskContainer}>
                    <AddEntityTitleForm
                        onSubmit={onAddTask}
                        submitButtonChildren={<SquarePlus size={34} color={'#7f5af0'}/>}
                        inputPlaceholder={"Type a new task title"}
                        isNeedResetForm
                        inputStyle={s.input}
                        buttonVariant={ButtonVariant.IconButton}
                    />
                </View>
                : <Button style={s.button} onPress={changeMode}>
                    <Text style={s.buttonCaption}>Add new task</Text>
                </Button>
            }
        </>
    );
};
