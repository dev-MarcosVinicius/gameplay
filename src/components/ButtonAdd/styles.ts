import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const style = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    content: {
        marginTop: 42
    },
    matches: {
        marginTop: 24,
        marginLeft: 24
    }
});