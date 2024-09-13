import React, {ReactNode} from 'react';
import {Overlay} from '@rneui/themed';
import {StyleSheet} from "react-native";

type Props = {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

export const Modal = ({onClose, isOpen, children}: Props) => {
     return (
        <Overlay isVisible={isOpen} onBackdropPress={onClose} overlayStyle={s.overlay}>
            {children}
        </Overlay>
    );
};

const s = StyleSheet.create({
    overlay:{
        backgroundColor: '#36363a'
    }
})
