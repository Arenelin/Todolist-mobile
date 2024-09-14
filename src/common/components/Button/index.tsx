import {Pressable} from "react-native";
import s from './styles'
import {ButtonComponentProps, ButtonVariant} from "common/types/components";

export const Button = (props: ButtonComponentProps) => {
    const {style, fullWidth, variant = ButtonVariant.Primary, ...rest} = props
    const buttonStyle = [s.button, s[variant], fullWidth && s.fullWidth];

    return <Pressable style={(state) => [
        ...(Array.isArray(buttonStyle) ? buttonStyle : [buttonStyle]),
        typeof style === 'function' ? style(state) : style]}{...rest}
    />
}
