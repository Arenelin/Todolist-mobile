import React, {ReactNode} from 'react';
import {Overlay} from '@rneui/themed';
import {StyleProp, ViewStyle} from "react-native";
import s from './styles'

type Props = {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    overlayStyle?: StyleProp<ViewStyle>
}

export const Modal = ({onClose, isOpen, children, overlayStyle}: Props) => {
    return (
        <Overlay
            isVisible={isOpen}
            onBackdropPress={onClose}
            overlayStyle={[s.overlay, overlayStyle]}>
                {children}
        </Overlay>
    );
};
