import { atom } from 'recoil';

export const selectedImagesAtom = atom<string[]>({
  key: 'media-atom',
  default: [],
});
