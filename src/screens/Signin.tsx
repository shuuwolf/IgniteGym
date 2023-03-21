import { VStack, Image, Center, Text, Heading, ScrollView } from 'native-base';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export function SignIn(){
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleNewAccount(){
        navigation.navigate('signUp');
    }
    return(
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <VStack flex={1} px={10} pb={16}>
                <Image
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt="Pessoas treinando"
                    resizeMode="contain"
                    position="absolute"
                />

                <Center my={24}>
                    <LogoSvg/>

                    <Text color="gray.100" fontSize="sm">
                        Treine sua mente e o seu corpo
                    </Text>
                </Center>

                <Center>
                    <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                        Acesse sua conta
                    </Heading>

                    <Input 
                        placeholder="E-mail"
                        keyboardType='email-address'
                        autoCapitalize='none'
                    />

                    <Input 
                        placeholder="Senha"
                        secureTextEntry
                    />

                    <Button title="Acessar"/>
                </Center>

                <Center mt={26}>
                    <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
                        Ainda nao tem acesso?
                    </Text>

                    <Button 
                        variant="outline" 
                        title="Criar conta"
                        onPress={handleNewAccount}
                    />
                </Center>
            </VStack>
        </ScrollView>
    )
}