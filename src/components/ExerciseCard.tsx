import { HStack, Heading, Image, VStack, Text, Icon } from "native-base";
import { TouchableOpacity, TouchableHighlightProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

type Props = TouchableHighlightProps & {

};

export function ExerciseCard({ ...rest }: Props){
    return(
        <TouchableOpacity {...rest}>
            <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={4}>
                <Image
                    source={{ uri: 'https://www.proteste.org.br/-/media/proteste/images/home/seus-direitos/direitos%20do%20consumidor/noticia/03%20academia.jpg?rev=fd888cfc-5779-4ed9-9a2e-486a0d425d62'}}
                    alt="Imagem do exercicio"
                    w={16}
                    h={16}
                    rounded="md"
                    mr={4}
                    resizeMode="center"
                />

                <VStack flex={1}>
                    <Heading fontSize="lg" color="white">
                        Remanda Unilateral
                    </Heading>

                    <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
                        3 series x 12 repeticoes
                    </Text>
                </VStack>

                <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
            </HStack>
        </TouchableOpacity>
    )
}