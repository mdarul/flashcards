import { StyleSheet } from "react-native";
import { getMarginsShorthand, grey, spacing } from "../../../globalStyles";
import { ButtonType } from "./Button.data";

export const getButtonStyle = (buttonType) => {
    switch(buttonType) {
        case ButtonType.BLUE:
            return { backgroundColor: '#6ec8fd' }
        default:
            return { backgroundColor: 'white', borderColor: grey, borderWidth: 1  }
    }
}

export const getButtonTextStyle = (buttonType) => {
    switch(buttonType) {
        case ButtonType.BLUE:
            return { color: 'white' }
        default:
            return {}
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        display: 'flex',
        flexBasis: 0,
        flexGrow: 1,
        borderRadius: spacing,
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Lato_700Bold',
        ...getMarginsShorthand(spacing * 1.5, 0)
    }
});

export default styles;