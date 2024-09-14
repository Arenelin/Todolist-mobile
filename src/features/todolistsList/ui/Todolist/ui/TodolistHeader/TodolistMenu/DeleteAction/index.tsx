import {Text, View} from "react-native";
import s from "./styles";
import {Trash2} from "lucide-react-native";
import {MenuItem} from "react-native-material-menu";
import {useDeleteTodolistMutation} from "services";

type Props = {
    todolistId: string
}

export const DeleteAction = ({todolistId}: Props) => {
    const [deleteTodo, {isLoading: isDeleteOnProcess}] = useDeleteTodolistMutation()

    const deleteTodolist = () => {
        deleteTodo({todolistId})
    }

    return (
        <MenuItem onPress={deleteTodolist} pressColor={'#636b73'} disabled={isDeleteOnProcess}>
            <View style={s.deleteContainer}>
                <Trash2 color={'crimson'} width={20}/>
                <Text style={s.menuItemText}>
                    Delete
                </Text>
            </View>
        </MenuItem>
    );
};
