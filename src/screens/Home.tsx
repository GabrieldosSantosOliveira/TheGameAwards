import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native'
import { Category, theGameAwards } from './../../theGameAwards'
import { GameHeader } from '../components/GameHeader'
import { Section } from './components/Section'
import { useCallback } from 'react'

export const Home = () => {
  const renderItem: ListRenderItem<Category> = useCallback(
    ({ item }) => <Section games={item.games} title={item.title} />,
    [],
  )
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<GameHeader />}
        data={theGameAwards}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
  },
})
