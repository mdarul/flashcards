import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import ButtonProps from '../../../models/props/buttonProps'
import styles from './BarButton.style'

const BarButton = ({text, onPressed, style, icon}: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPressed} style={[styles.buttonContainer, style]}>
            {icon}
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default BarButton;