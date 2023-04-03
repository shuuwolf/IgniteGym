import { useState } from "react";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, ScrollView, VStack, Skeleton } from "native-base";


export function Profile(){
    const [photoIsLoading, setPhotoIsLoading] = useState(true);

    return (
        <VStack flex={1}>
            <ScreenHeader title="Perfil" />

            <ScrollView>
                <Center mt={6} px={10}>
                    {
                        photoIsLoading ?
                        <Skeleton 
                        w={33} 
                        h={33} 
                        rounded="full"
                        startColor="gray.500"
                        endColor="gray.400"
                    />
                    :
                    <UserPhoto 
                        source={{ uri: 'https://github.com/shuuwolf.png'}}
                        alt="Foto de Perfil"
                        size={33}
                    />
                    }
                </Center>
            </ScrollView>
        </VStack>
    )
}