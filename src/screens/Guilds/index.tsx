import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import Guild, { GuildProps } from '../../components/Guild'
import ListDivider from '../../components/ListDivider'
import Load from '../../components/Load'
import { api } from '../../services/api'
import { styles } from './styles'

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export default function Guilds({handleGuildSelect}: Props) {
    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);

    async function getGuilds() {
        const response = await api.get('/users/@me/guilds');

        setGuilds(response.data);
        setLoading(false);
    }

    useEffect(() => {
        getGuilds();
    },[])

    return (
        <View style={styles.container}>
            {
                loading 
                ?
                <Load/>
                :
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
            }
        </View>
    )
}
