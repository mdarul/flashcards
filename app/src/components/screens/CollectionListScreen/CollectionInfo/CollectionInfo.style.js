import { StyleSheet } from "react-native";
import { contentColor, getPaddingsShorthand, largeFontSize, spacing } from "../../../../globalStyles";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: contentColor,
        borderRadius: spacing*2.5,
        marginBottom: spacing*2,
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: "100%"
        
    },
    iconWrapper: {
        ...getPaddingsShorthand(spacing*3, spacing*1.5)
    },
    lastIconWrapper: {
        ...getPaddingsShorthand(spacing*3, spacing*2, spacing*3, spacing*1.5)
    },
    collectionNameText: {
        fontFamily: 'Lato_700Bold',
        fontSize: largeFontSize,
        ...getPaddingsShorthand(spacing*3, spacing*2)
    }
});

export default styles;