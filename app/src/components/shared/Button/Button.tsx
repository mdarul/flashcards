import { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native'
import { ButtonProps, ButtonType } from './Button.data'
import styles, { getButtonStyle, getButtonTextStyle } from './Button.style'

const Button = ({text, onPress, type = ButtonType.WHITE, style}: ButtonProps) => {
    const [buttonStyle, setButtonStyle] = useState<object>({});
    const [buttonTextStyle, setButtonTextStyle] = useState<object>({});

    useEffect(() => {
        setButtonStyle(getButtonStyle(type));
        setButtonTextStyle(getButtonTextStyle(type));
    }, [type])

    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, buttonStyle, style]}>
            <Text style={[styles.buttonText, buttonTextStyle]}>{text}</Text>            
        </TouchableOpacity>
    )
}

export default Button