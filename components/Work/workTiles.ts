export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are a few things`,
    title: `I've worked on in my free time`,
    image: {
      src: '/static/images/all-apps.webp',
      width: 1242,
      height: 100,
    },
  },
  {
    description: 'powered by p5js',
    title: 'Chess',
    image: {
      src: '/static/images/chess-app.webp',
      width: 918,
      height: 100,
    },
  },
  {
    description: `classic game powered by Angular and Firebase`,
    title: 'Cows & Bulls',
    image: {
      src: '/static/images/cows-n-bulls-app.webp',
      width: 1053,
      height: 100,
    },
  },
  {
    description: `angular directive for Email/Password or Social logins based authentication`,
    title: 'ngafr Authentication',
    image: {
      src: '/static/images/ngafrAuth-app.webp',
      width: 847,
      height: 100,
    },
  },
  {
    description: `classic game powered by Angular and Firebase`,
    title: 'Pictionary',
    image: {
      src: '/static/images/pictionary-app.webp',
      width: 800,
      height: 200,
    },
  },
];
