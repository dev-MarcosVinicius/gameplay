import React from 'react'
import { FlatList, ImageBackground, Text, View } from 'react-native'
import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import Header from '../../components/Header'
import { theme } from '../../global/styles/theme'
import BannerImg from '../../assets/banner.png'
import { styles } from './styles'
import Member from '../../components/Member'
import ListDivider from '../../components/ListDivider'
import { ButtonIcon } from '../../components/Buttonicon'


export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Marcos',
            avatar_url: 'https://github.com/dev-MarcosVinicius.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Rodrigo',
            avatar_url: 'https://github.com/rodrigorgtic.png',
            status: 'offline'
        }
    ];

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
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
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challanger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader
                title="Jogadores"
                subtitle="Total 3"
            />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.members}
                renderItem={({ item }) => (
                    <Member
                        data={item}
                    />
                )}
            />

            <View style={styles.footer}>
                <ButtonIcon
                    title="Entrar na partida"
                />
            </View>

        </Background>
    )
}
