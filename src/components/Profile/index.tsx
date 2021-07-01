import React from "react";
import { View, Text, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { style } from "./styles";

export function Profile() {
    const { user } = useAuth();

    function handleSignOut() {
        Alert.alert('Logout', 'Deseja sair do Gameplay?')
    }

    return (
        <View style={style.container}>

            <RectButton>
                <Avatar urlImage={user.avatar}/>
            </RectButton>

            <View>
                <View style={style.user}>
                    <Text style={style.greeating}>
                        Olá!
                    </Text>
                    <Text style={style.username}>
                        {user.firstName}
                    </Text>
                </View>
                    <Text style={style.message}>
                        Hoje é dia de vitória!
                    </Text>
            </View>
        </View>
    );
}