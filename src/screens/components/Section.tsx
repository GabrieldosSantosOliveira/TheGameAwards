import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import { Category, GameAwards } from '../../../theGameAwards'
import { Game } from '../../components/Game'
import { useCallback } from 'react'
export type SectionProps = Category
export const Section: React.FC<SectionProps> = ({ games, title }) => {
  const renderItem: ListRenderItem<GameAwards> = useCallback(
    ({ item }) => <Game game={item} />,
    [],
  )
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={games}
        contentContainerStyle={styles.games}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins_500Medium',
    color: 'white',
    fontSize: 16,
  },
  container: {
    paddingHorizontal: 12,
  },
  games: {
    gap: 18,
    marginTop: 12,
    marginBottom:12
  },
})
