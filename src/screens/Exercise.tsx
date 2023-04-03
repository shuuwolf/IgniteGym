import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HStack, Heading, Icon, VStack, Text, Image} from "native-base";
import { Feather } from '@expo/vector-icons';

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from "@assets/body.svg";

export function Exercise(){
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleGoBack(){
        navigation.goBack();
    }

    return (
        <VStack flex={1}>
            <VStack px={8} bg="gray.600" pt={12}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon 
                        as={Feather}
                        name="arrow-left"
                        color="green.500"
                        size={6}                 
                    />
                </TouchableOpacity>

                <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
                    <Heading color="gray.100" fontSize="lg" flexShrink={1}>
                        Puxada Frontal
                    </Heading>

                    <HStack alignItems="center">
                        <BodySvg />
                        <Text color="gray.200" ml={1} textTransform="capitalize">
                            costas
                        </Text>
                    </HStack>
                </HStack>
            </VStack>

            <VStack p={8}>
                <Image 
                    w="full"
                    h={80}
                    source={{ uri: 'https://s3.sa-east-1.amazonaws.com/static.activodeporte.com/brasil/uploads/2022/11/11140006/leg-day-and-workout-in-a-gym-2021-08-26-17-32-37-utc-1-690x515.jpg'}}
                    alt="Nome do exercicio"
                    mb={3}
                    resizeMode="cover"
                    rounded="lg"
                />
            </VStack>
        </VStack>
    )
}