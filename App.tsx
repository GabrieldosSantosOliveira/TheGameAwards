import { Home } from './src/screens/Home'
import { Poppins_500Medium, useFonts } from '@expo-google-fonts/poppins'
import { StatusBar } from 'expo-status-bar'

import { Loading } from './src/components/Loading'
export default function App() {
  const [isFontsLoaded] = useFonts({
    Poppins_500Medium,
  })
  if (!isFontsLoaded) {
    return <Loading />
  }
  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  )
}
