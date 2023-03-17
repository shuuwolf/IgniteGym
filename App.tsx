import { Text, View, StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { THEME } from './src/theme';
import { Loading } from '@components/Loading';
import { SignIn } from '@screens/Signin';

export default function App() {
  const [fontsloaded] = useFonts({ Roboto_400Regular, Roboto_700Bold}) 


  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsloaded ? <SignIn/> : <Loading/>}
    </NativeBaseProvider>
  );
}
