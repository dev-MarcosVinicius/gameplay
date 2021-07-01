import React, { useCallback, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";
import { ListHeader } from '../../components/ListHeader';
import { Appointment, AppointmentProps } from "../../components/Appointment";
import ListDivider from "../../components/ListDivider";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENT, COLLECTION_APPOINTMENT_SELECTED } from "../../configs/database";
import Load from "../../components/Load";
import { Background } from "../../components/Background";

export function Home() {
    const [category, setCategory] = useState('');
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    async function loadAppointment() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENT);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

        if (category) {
            setAppointments(storage.filter(item => item.category === category));
        } else {
            setAppointments(storage);
        }

        setLoading(false);
    }

    function handleCategorySelect(categoryId: string) {
        category === categoryId ? setCategory('') : setCategory(categoryId);
    }

    async function handleAppointmentDetails(guildSelected: AppointmentProps) {
        navigation.navigate('AppointmentDetails', { guildSelected });
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate')
    }

    // recarrega a lista sempre que seleciona uma nova categoria
    useFocusEffect(useCallback(()=> {
        loadAppointment();
    },[category]))

    return (
        <Background>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />

            {
                loading
                ?
                <Load/>
                :
                <>
                    <ListHeader
                        title="Partidas Agendadas"
                        subtitle={`Total ${appointments.length}`}
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
                                    onPress={() => handleAppointmentDetails(item)}
                                />
                            )}
                        />
                </>
            }
        </Background>
    );
}