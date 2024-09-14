import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { TextInput as RNTextInput } from 'react-native';

export enum InputType {
    password = 'password',
    search = 'search',
    text = 'text',
}

export type InputProps = {
    disabled?: boolean;
    isError?: boolean;
    errorMessage?: string;
    iconEnd?: ReactNode;
    iconStart?: ReactNode;
    label?: string;
    onClickIconEndHandler?: () => void;
    onClickButtonHandler?: () => void;
    switchableIconEnd?: ReactNode;
    type?: InputType;
} & ComponentPropsWithoutRef<typeof RNTextInput>;

export type InputComponentProps = Omit<ComponentPropsWithoutRef<typeof RNTextInput>, keyof InputProps> & InputProps;
