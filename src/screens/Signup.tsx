import { VStack, Image, Center, Text, Heading, ScrollView } from 'native-base';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export function SignUp(){
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
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
                        Crie sua conta
                    </Text>
                </Center>

                <Center>
                    <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                        Acesse sua conta
                    </Heading>

                    <Input 
                        placeholder="Nome"
                    />

                    <Input 
                        placeholder="E-mail"
                        keyboardType='email-address'
                        autoCapitalize='none'
                    />

                    <Input 
                        placeholder="Senha"
                        secureTextEntry
                    />

                    <Button title="Criar e acessar"/>
                </Center>


                <Button 
                    mt={26} 
                    variant="outline" 
                    title="Voltar para o login"
                    onPress={handleGoBack}
                />
            </VStack>
        </ScrollView>
    )
}