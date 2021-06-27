import React, { useContext } from 'react';
import { View, Text, TextInput, Image, StatusBar, Alert, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/Buttonicon';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';

export function SignIn() {
    // const navigation = useNavigation();
    const { loading, signIn } = useAuth();

    async function handleSignIn() {
        // navigation.navigate('Home');
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error);
        }
    }

    return (
        <View style={styles.container}>

            <Image 
                source={ IllustrationImg }
                style={styles.image}
                resizeMode='stretch'
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se e{`\n`}
                    Organize suas{`\n`}
                    jogatinas
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seu games {`\n`}
                    favoritos com seus amigos
                </Text>

                {
                    loading 
                    ?
                    <ActivityIndicator color={theme.colors.primary}/>
                    :
                    <ButtonIcon 
                        title='Entrar com Discord'
                        onPress={handleSignIn}
                    />
                }
                
            </View>
        </View>
    );
}