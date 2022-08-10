import { StyleSheet } from "react-native"
import { getPaddingsShorthand, spacing } from "../../../globalStyles";

const styles = StyleSheet.create({
    screenWrapperContainer: {
        ...getPaddingsShorthand(spacing*2.5)
    },
    collectionsContainer: {
        marginTop: spacing*2
    }
});

export default styles;