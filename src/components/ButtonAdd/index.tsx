import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { style } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

export function ButtonAdd({...rest}: RectButtonProps) {
    return (
        <RectButton 
            style={style.container}
        >
            <MaterialCommunityIcons
                name='plus'
                color={theme.colors.heading}
                size={24}
            />
        </RectButton>
    );
}