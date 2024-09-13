import {ComponentPropsWithoutRef} from 'react'

import {Pressable, StyleSheet} from "react-native";

type ButtonVariant = 'primary' | 'secondary'
type ButtonProps = {
    fullWidth?: boolean
    variant?: ButtonVariant
} & ComponentPropsWithoutRef<typeof Pressable>
export const Button = (props: ButtonProps) => {
    const {style, fullWidth, variant = 'primary', ...rest} = props
    return <Pressable style={[s.button, s[variant], fullWidth && s.fullWidth]} {...rest}/>
}

const s = StyleSheet.create({
    button: {
        cursor: 'pointer',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
        paddingHorizontal: 28,
        borderRadius: 4,
    },
    primary: {
        backgroundColor: '#7f5af0',
    },
    secondary: {
        backgroundColor: '#94A1B2',
    },
    fullWidth: {
        width: '100%',
    },
});
