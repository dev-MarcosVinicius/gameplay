import React from "react";
import { Image, View } from "react-native";
import { style } from "./styles";
import DiscordSvg from "../../assets/discord.svg"

const { CNC_IMAGE } = process.env;

type Props = {
    guildId: string;
    iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: Props) {
    const uri = `${CNC_IMAGE}/icons/${guildId}/${iconId}.png`;

    return (
        <View style={style.container}>
            {
                iconId
                ?
                <Image 
                    source={{ uri }}
                    style={style.image}
                    resizeMode="cover"
                />
                :
                <DiscordSvg
                    width={40}
                    height={40}
                />
            }
        </View>
    );
}