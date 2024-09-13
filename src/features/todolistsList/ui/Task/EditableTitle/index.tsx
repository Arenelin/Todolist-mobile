import {StyleSheet, Text, TextInput} from "react-native";
import {useState} from "react";

type Props = {
    currentTitle: string
    changeTitle: (newTitle: string) => void
    isDone: boolean
}

export const EditableTitle = ({currentTitle, changeTitle, isDone}: Props) => {
    const [isEditMode, setIsEditMode] = useState(false)

    const [newTitle, setNewTitle] = useState(currentTitle)
    const changeEditMode = () => {
        setIsEditMode(!isEditMode)
    }
    const onChangeTitle = () => {
        changeEditMode()
        changeTitle(newTitle.trim() ? newTitle : currentTitle)
    }

    return (
        <>
            {isEditMode
                ? <TextInput autoFocus style={s.input} onBlur={onChangeTitle} value={newTitle}
                             onChangeText={setNewTitle}/>
                : <Text
                    onPress={changeEditMode}
                    style={[s.taskTitle, isDone && s.taskIsDoneTitle]}>
                    {currentTitle}
                </Text>}
        </>
    );
};

const s = StyleSheet.create({
    taskTitle: {
        color: '#fffffe'
    },
    taskIsDoneTitle: {
        textDecorationLine: 'line-through'
    },
    checkbox: {
        backgroundColor: 'red'
    },
    input: {
        color: '#ffffff',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 150,
        padding: 8
    }
})
