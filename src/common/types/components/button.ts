import {ComponentPropsWithoutRef} from "react";
import {Pressable} from "react-native";

export enum ButtonVariant {
    Primary= 'primary',
    Secondary = 'secondary',
    IconButton = 'iconButton'
}
export type ButtonComponentProps = {
    fullWidth?: boolean
    variant?: ButtonVariant
} & ComponentPropsWithoutRef<typeof Pressable>
