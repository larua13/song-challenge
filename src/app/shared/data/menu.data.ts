export interface Challenge {
  id: string;
  resolve: boolean;
}

export const ChallengeProgress = [
  {
    id: 'doremix',
    resolve: false,
  },
  {
    id: 'sigueCantando',
    resolve: false,
  },
  {
    id: 'ordena',
    resolve: false,
  },
  {
    id: 'preguntas',
    resolve: false,
  },
  {
    id: 'adivina',
    resolve: false,
  },
  {
    id: 'tocala',
    resolve: false,
  },
];

export interface ModalData {
  title?: string;
  text: string;
  icon?: string;
  img?: string;
}
