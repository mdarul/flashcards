import { Dimensions, StyleSheet } from "react-native";
import { getPaddingsShorthand, grey, spacing } from "../../../../globalStyles";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: Dimensions.get('window').width *0.75,
        backgroundColor: "white",
        borderRadius: spacing*2,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        ...getPaddingsShorthand(spacing*4)
    },
    modalTextInput: {
        borderWidth: 1,
        borderColor: grey,
        borderRadius: spacing,
        backgroundColor: grey,
        backgroundColor: 'rgba(160, 160, 160, 0.20)',
        ...getPaddingsShorthand(spacing, spacing*2)

    },
    modalButtonsRow: {
        marginTop: spacing*2,
        display: 'flex',
        flexDirection: 'row',
    }
});

export default styles;