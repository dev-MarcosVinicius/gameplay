import React from "react";
import { Image } from "react-native";
import { style } from "./styles";

export function GuildIcon() {
    const uri = 'https://www.creativefreedom.co.uk/wp-content/uploads/2016/07/pokemon1.png';
    return (
        <Image 
            source={{ uri }}
            style={style.image}
            resizeMode="cover"
        />
    );
}