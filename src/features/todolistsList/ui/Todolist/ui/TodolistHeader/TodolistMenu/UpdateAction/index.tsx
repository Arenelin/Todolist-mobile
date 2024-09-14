import s from "./styles";
import {Text, View} from "react-native";
import {AddEntityTitleForm, Button, Modal} from "common/components";
import {ButtonVariant} from "common/types/components";
import {Pencil, X} from "lucide-react-native";
import {MenuItem} from "react-native-material-menu";
import {AddEntityForm} from "common/types";
import {useState} from "react";
import {useUpdateTodolistMutation} from "services";

type Props = {
    prevTitle: string
    todolistId: string
    changeVisibilityMenu: () => void
}

export const UpdateAction = ({prevTitle, changeVisibilityMenu, todolistId}: Props) => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const [updateTitle] = useUpdateTodolistMutation()
    const changeVisibilityModal = () => {
        setIsOpenModal(!isOpenModal)
    }
    const onUpdateTitle = ({title}: AddEntityForm) => {
        updateTitle({todolistId, title})
        changeVisibilityModal()
        changeVisibilityMenu()
    }

    return (
        <>
            <MenuItem onPress={changeVisibilityModal} pressColor={'#636b73'}>
                <View style={s.deleteContainer}>
                    <Pencil color={'#ffffff'} width={20}/>
                    <Text style={s.menuItemText}>
                        Edit title
                    </Text>
                </View>
            </MenuItem>
            <Modal isOpen={isOpenModal} onClose={changeVisibilityModal} overlayStyle={s.overlayStyle}>
                <View style={s.editTitleContainer}>
                    <Text style={s.editTitle}>Edit title</Text>
                    <Button onPress={changeVisibilityModal} variant={ButtonVariant.IconButton} style={s.crossButton}>
                        <X color={'#ffffff'}/>
                    </Button>
                    <AddEntityTitleForm
                        onSubmit={onUpdateTitle}
                        submitButtonChildren={<Text style={s.saveButtonCaption}>Save</Text>}
                        defaultValue={prevTitle}
                        buttonStyle={s.saveButton}
                        isNeedAutoFocus
                        inputStyle={s.input}
                    />
                </View>
            </Modal>
        </>
    );
};
