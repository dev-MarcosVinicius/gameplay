import React from 'react'
import { View, FlatList } from 'react-native'
import Guild, { GuildProps } from '../../components/Guild'
import ListDivider from '../../components/ListDivider'
import { styles } from './styles'

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export default function Guilds({handleGuildSelect}: Props) {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        }
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                ItemSeparatorComponent={() => <ListDivider isCenter/>}
                ListHeaderComponent={() => <ListDivider isCenter/>}
                showsVerticalScrollIndicator={false}
                style={styles.guilds}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingBottom: 69, paddingTop: 40 }}
                renderItem={({item}) => (
                    <Guild 
                        data={item}
                        onPress={() => handleGuildSelect(item)}
                    />
                )}
            />
        </View>
    )
}
