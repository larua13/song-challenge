export const GuessSongData = [
  {
    song: '../../../assets/mammamia.mp3',
    answer: 'Mamma mia',
    mode: 'ralentizada',
    clue: '../../../assets/mammamia2.mp3',
  },
  {
    song: '../../../assets/miestrella.mp3',
    answer: 'Mi estrella blanca',
    mode: 'acelerada',
    clue: '../../../assets/miestrella2.mp3',
  },
  {
    song: '../../../assets/horoscopo.mp3',
    answer: 'Horóscopo',
    mode: 'del revés',
    clue: '../../../assets/horoscopo2.mp3',
  },
  {
    song: '../../../assets/kesi.mp3',
    answer: 'KESI',
    mode: 'reducida a 1 SEGUNDO',
    clue: '../../../assets/kesi2.mp3',
  },
  {
    song: '../../../assets/babys.mp3',
    answer: 'Las babys',
    mode: 'reducida a 1/2 SEGUNDO!',
    clue: '../../../assets/babys2.mp3',
  },
];

export interface GuessSongModel {
  song: string;
  answer: string;
  mode?: string;
  clue?: string;
}

export const PlayitData = [
  {
    song: '../../../assets/deellos.jpg',
    answer: 'De ellos aprendí',
  },
  {
    song: '../../../assets/ultima.jpg',
    answer: 'La última',
  },
];
