import {IconButton} from "react-native-paper";
import {useState} from "react";
import {Menu, MenuDivider, MenuItem} from "react-native-material-menu";
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useDeleteTodolistMutation, useUpdateTodolistMutation} from "services";
import {Input, Modal} from "common/components";
import {EllipsisVertical, Pencil, Trash2, X} from "lucide-react-native";
import {Controller, useForm} from "react-hook-form";
import {editTitleSchema, UpdateTodolistForm} from "types";
import {zodResolver} from "@hookform/resolvers/zod";
import s from './styles'

type Props = {
    todolistId: string
    prevTitle: string
}

export const TodolistMenu = ({todolistId, prevTitle}: Props) => {
    const [updateTitle] = useUpdateTodolistMutation()
    const [isVisible, setIsVisible] = useState(false)
    const [deleteTodo, {isLoading: isDeleteOnProcess}] = useDeleteTodolistMutation()
    const changeVisibilityMenu = () => {
        setIsVisible(!isVisible)
    }
    const deleteTodolist = () => {
        deleteTodo({todolistId})
    }


    const [isOpenModal, setIsOpenModal] = useState(false)
    const changeVisibilityModal = () => {

        setIsOpenModal(!isOpenModal)
    }
    const {
        handleSubmit,
        control,
        formState: {errors}
    } = useForm<UpdateTodolistForm>({
        resolver: zodResolver(editTitleSchema),
        mode: 'onTouched',
        defaultValues: {title: prevTitle,}
    });
    const onUpdateTitle = ({title}: UpdateTodolistForm) => {
        updateTitle({todolistId, title})
    }

    return (
        <Menu
            visible={isVisible}
            anchor={<EllipsisVertical style={s.anchorIcon} color={'#ffffff'} onPress={changeVisibilityMenu}/>}
            onRequestClose={changeVisibilityMenu}
            style={s.menu}
        >
            <MenuItem onPress={changeVisibilityModal} pressColor={'#636b73'} disabled={isDeleteOnProcess}>
                <View style={s.deleteContainer}>
                    <Pencil color={'white'} width={20}/>
                    <Text style={s.menuItemText}>
                        Edit title
                    </Text>
                </View>
            </MenuItem>
            <MenuDivider/>
            <MenuItem onPress={deleteTodolist} pressColor={'#636b73'} disabled={isDeleteOnProcess}>
                <View style={s.deleteContainer}>
                    <Trash2 color={'crimson'} width={20}/>
                    <Text style={s.menuItemText}>
                        Delete
                    </Text>
                </View>
            </MenuItem>
            <Modal isOpen={isOpenModal} onClose={changeVisibilityModal}>
                <View style={s.editTitleContainer}>
                    <Text>Edit title</Text>
                    <Button  onPress={changeVisibilityModal} title={`${<X/>}`}/>

                    <Controller
                        control={control}
                        rules={{required: true}}
                        render={({field: {onChange, value}}) => (
                            <Input
                                autoFocus
                                errorMessage={errors?.title?.message}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="title"
                    />
                    <Button onPress={handleSubmit(onUpdateTitle)} title={'Save'}/>

                </View>
            </Modal>
        </Menu>
    );
};

