import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";
import { style } from "./styles";

export function Profile() {
    return (
        <View style={style.container}>

            <Avatar urlImage="https://github.com/dev-MarcosVinicius.png"/>

            <View>
                <View style={style.user}>
                    <Text style={style.greeating}>
                        Olá!
                    </Text>
                    <Text style={style.username}>
                        Marcos
                    </Text>
                </View>
                    <Text style={style.message}>
                        Hoje é dia de vitória!
                    </Text>
            </View>
        </View>
    );
}