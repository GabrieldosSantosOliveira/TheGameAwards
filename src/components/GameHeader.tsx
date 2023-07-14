import { Image, useWindowDimensions } from 'react-native'
import Logo from './../assets/logo.jpg'

const dimensions = {
  width: 1200,
  height: 675,
}
export const GameHeader = () => {
  const ratio = dimensions.height / dimensions.width
  const window = useWindowDimensions()
  const width = window.width
  const height = width * ratio
  return (
    <Image
      source={Logo}
      resizeMode="contain"
      style={{ resizeMode: 'contain', width, height }}
    />
  )
}
