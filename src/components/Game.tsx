import React, { memo } from 'react'
import { GameAwards } from '../../theGameAwards'
import { Image, StyleSheet, Text, View } from 'react-native'

export interface GameProps {
  game: GameAwards
}
const GameBase: React.FC<GameProps> = ({ game }) => {
  return (
    <View
      accessible
      accessibilityLabel={`Imagem do jogo ${game.name}`}
      style={styles.container}
    >
      <Image source={game.image} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{game.name}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: { height: 180, width: 150 },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    color: 'white',
    fontFamily: 'Poppins_500Medium',
    textAlign: 'center',
  },
  titleContainer: {
    position: 'absolute',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
})
export const Game = memo(GameBase)
