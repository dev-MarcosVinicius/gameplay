import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, ImageBackground, Platform, Share, Text, View } from 'react-native'
import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import Header from '../../components/Header'
import { theme } from '../../global/styles/theme'
import BannerImg from '../../assets/banner.png'
import { styles } from './styles'
import Member, { MemberProps } from '../../components/Member'
import ListDivider from '../../components/ListDivider'
import { ButtonIcon } from '../../components/Buttonicon'
import { useRoute } from '@react-navigation/native'
import { AppointmentProps } from '../../components/Appointment'
import { api } from '../../services/api'
import { Alert } from 'react-native'
import Load from '../../components/Load'
import { Linking } from 'react-native'

type Params = {
    guildSelected: AppointmentProps;
}

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
}


export function AppointmentDetails() {
    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
    const [loading, setLoading] = useState(true)
    const route = useRoute();
    const { guildSelected } = route.params as Params;

    async function getGuildInfo() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);

            setWidget(response.data);

            setLoading(false);
        } catch {
            Alert.alert('Verifique se as configurçações do servidor estão corretas.')
        } finally {
            setLoading(false);
        }
    }

    function handleShareInvatation() {
        const message = Platform.OS === 'ios' 
        ?
        `Junte-se a ${guildSelected.guild.name}`
        :
        widget.instant_invite;

        Share.share({
            message,
            url: widget.instant_invite 
        });
    }

    function handleOpenGuild() {
        Linking.openURL(widget.instant_invite);
    }

    useEffect(() => {
        getGuildInfo();
    }, [])

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    widget.instant_invite
                    &&
                    <BorderlessButton onPress={handleShareInvatation}>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground 
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        { guildSelected.guild.name }
                    </Text>

                    <Text style={styles.subtitle}>
                        { guildSelected.description }
                    </Text>
                </View>
            </ImageBackground>

            {
                loading
                ?
                <Load/>
                :
                <>
                    <ListHeader
                        title="Jogadores"
                        subtitle={`Total ${widget.members.length}`}
                    />

                    <FlatList
                        data={widget.members}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => <ListDivider/>}
                        style={styles.members}
                        renderItem={({ item }) => (
                            <Member
                                data={item}
                            />
                        )}
                    />

                    {
                        widget.instant_invite
                        &&
                        <View style={styles.footer}>
                            <ButtonIcon
                                title="Entrar na partida"
                                onPress={handleOpenGuild}
                            />
                        </View>
                    }
                </>
            }

        </Background>
    )
}
