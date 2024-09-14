import {useState} from "react";
import {Menu, MenuDivider} from "react-native-material-menu";
import {EllipsisVertical} from "lucide-react-native";
import s from './styles'
import {UpdateAction} from "./UpdateAction";
import {DeleteAction} from "./DeleteAction";

type Props = {
    todolistId: string
    prevTitle: string
}

export const TodolistMenu = ({todolistId, prevTitle}: Props) => {
    const [isVisibleMenu, setIsVisibleMenu] = useState(false)

    const changeVisibilityMenu = () => {
        setIsVisibleMenu(!isVisibleMenu)
    }

    return (
        <Menu
            visible={isVisibleMenu}
            anchor={<EllipsisVertical style={s.anchorIcon} color={'#ffffff'} onPress={changeVisibilityMenu}/>}
            onRequestClose={changeVisibilityMenu}
            style={s.menu}>
            <UpdateAction
                prevTitle={prevTitle}
                todolistId={todolistId}
                changeVisibilityMenu={changeVisibilityMenu}
            />
            <MenuDivider/>
            <DeleteAction todolistId={todolistId}/>
        </Menu>
    );
};
