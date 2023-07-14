import { ImageSourcePropType } from 'react-native'

export interface GameAwards {
  name: string
  image: ImageSourcePropType
}
export interface Category {
  games: GameAwards[]
  title: string
}
export const theGameAwards: Category[] = [
  {
    title: 'Jogo do Ano',
    games: [
      { image: require('./src/assets/elden-ring.jpg'), name: 'Elden Ring' },
      {
        image: require('./src/assets/plague_tale.jpeg'),
        name: 'A Plague Tale: Requiem',
      },
      {
        image: require('./src/assets/god-of-war.jpg'),
        name: 'God of War Ragnarok',
      },
      {
        image: require('./src/assets/horizon.jpg'),
        name: 'Horizon Forbidden West',
      },
      { image: require('./src/assets/stray.jpg'), name: 'Stray' },
      {
        image: require('./src/assets/xenoblade.png'),
        name: 'Xenoblade Chronicles 3',
      },
    ],
  },
  {
    title: 'Melhor Direção',
    games: [
      { image: require('./src/assets/elden-ring.jpg'), name: 'Elden Ring' },
      {
        image: require('./src/assets/god-of-war.jpg'),
        name: 'God of War Ragnarok',
      },
      {
        image: require('./src/assets/horizon.jpg'),
        name: 'Horizon Forbidden West',
      },
      { image: require('./src/assets/immortality.jpeg'), name: 'Immortality' },
      { image: require('./src/assets/stray.jpg'), name: 'Stray' },
    ],
  },
  {
    title: 'Melhor Narrativa',
    games: [
      {
        image: require('./src/assets/plague_tale.jpeg'),
        name: 'A Plague Tale: Requiem',
      },
      { image: require('./src/assets/elden-ring.jpg'), name: 'Elden Ring' },
      {
        image: require('./src/assets/god-of-war.jpg'),
        name: 'God of War Ragnarok',
      },
      {
        image: require('./src/assets/horizon.jpg'),
        name: 'Horizon Forbidden West',
      },
      { image: require('./src/assets/immortality.jpeg'), name: 'Immortality' },
    ],
  },
  {
    title: 'Melhor Direção de Arte',
    games: [
      { image: require('./src/assets/elden-ring.jpg'), name: 'Elden Ring' },
      {
        image: require('./src/assets/god-of-war.jpg'),
        name: 'God of War Ragnarok',
      },
      {
        image: require('./src/assets/horizon.jpg'),
        name: 'Horizon Forbidden West',
      },
      { image: require('./src/assets/scorn.jpeg'), name: 'Scorn' },
      { image: require('./src/assets/stray.jpg'), name: 'Stray' },
    ],
  },
  {
    title: 'Melhor Trilha sonora/Música',
    games: [
      {
        image: require('./src/assets/plague_tale.jpeg'),
        name: 'A Plague Tale: Requiem',
      },
      { image: require('./src/assets/elden-ring.jpg'), name: 'Elden Ring' },
      {
        image: require('./src/assets/god-of-war.jpg'),
        name: 'God of War Ragnarok',
      },
      {
        image: require('./src/assets/metal-review.jpg'),
        name: 'Metal Hellsinger',
      },
    ],
  },
  {
    title: 'Melhor Design de Áudio',
    games: [
      {
        image: require('./src/assets/mw2.jpg'),
        name: 'Call of Duty: Modern Warfare 2',
      },
      { image: require('./src/assets/elden-ring.jpg'), name: 'Elden Ring' },
      {
        image: require('./src/assets/god-of-war.jpg'),
        name: 'God of War Ragnarok',
      },
      {
        image: require('./src/assets/gran-turismo.png'),
        name: 'Gran Turismo',
      },
      {
        image: require('./src/assets/horizon.jpg'),
        name: 'Horizon Forbidden West',
      },
    ],
  },
  {
    title: 'Melhor Performance',
    games: [
      {
        image: require('./src/assets/horizon.jpg'),
        name: 'Horizon Forbidden West',
      },
      {
        image: require('./src/assets/plague_tale.jpeg'),
        name: 'A Plague Tale: Requiem',
      },
      {
        image: require('./src/assets/god-of-war.jpg'),
        name: 'God of War Ragnarok',
      },
      { image: require('./src/assets/immortality.jpeg'), name: 'Immortality' },
    ],
  },
]
