import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from "../../components/Appointment";
import ListDivider from "../../components/ListDivider";
import { useNavigation } from "@react-navigation/native";

export function Home() {
    const [ category, setCategory ] = useState('');

    const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'É hoje negão'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'É hoje negão'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId)
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails')
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate')
    }

    return (
        <View>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />

            <ListHeader
                title="Partidas Agendadas"
                subtitle="Total 6"
            />

            <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <ListDivider/>}
                    contentContainerStyle={{ paddingBottom: 69 }}
                    renderItem={({ item }) => (
                        <Appointment 
                            data={item}
                            onPress={handleAppointmentDetails}
                        />
                    )}
                />
        </View>
    );
}