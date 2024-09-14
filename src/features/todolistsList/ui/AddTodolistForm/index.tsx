import {Text, View} from "react-native";
import {AddEntityForm} from "common/types";
import {useCreateTodolistMutation} from "services";
import s from './styles'
import {AddEntityTitleForm} from "common/components";

export const AddTodolistForm = () => {
    const [createTodolist, {isLoading}] = useCreateTodolistMutation()
    const onAddNewTodolist = ({title}: AddEntityForm) => {
        createTodolist({title})
    }

    return (
        <View style={s.formContainer}>
            <AddEntityTitleForm
                isLoading={isLoading}
                onSubmit={onAddNewTodolist}
                submitButtonChildren={<Text style={s.buttonCaption}>Add new todolist</Text>}
                buttonStyle={s.button}
                isNeedResetForm
                inputPlaceholder={"Type a new todolist title"}
            />
        </View>
    );
};
