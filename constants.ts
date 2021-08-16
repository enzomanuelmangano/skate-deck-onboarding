import { ImageProps } from 'react-native';

export const BACKGROUND_COLOR = '#F1F1F1';

export interface PageInterface extends Pick<ImageProps, 'source'> {
  title: string;
  description: string;
}

export const PAGES: PageInterface[] = [
  {
    title: 'Samurai',
    description:
      'A durable deck featured with a menacing face of a samurai at the center of the underside accompanied with a large red sun motif.',
    source: require('./assets/skates/01.png'),
  },
  {
    title: 'Reject',
    description:
      "You don't have time to consider wheter the graphic on your CSS board would be considered modernist.",
    source: require('./assets/skates/02.png'),
  },
  {
    title: 'Great Wave',
    description:
      'The top of the deck has the same matching graphic in black outline and embodies an overall mellow concave.',
    source: require('./assets/skates/03.png'),
  },
];
