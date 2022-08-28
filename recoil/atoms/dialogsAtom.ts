import { atom, selector } from 'recoil';

export const deleteImagesDialogAtom = atom({
  key: 'delete-image-dialog',
  default: false,
});

export const addImagesDialogAtom = atom({
  key: 'add-image-dialog',
  default: false,
});

export const featuredImgSrcAtom = atom<string[]>({
  key: 'feature-img-src',
  default: [],
});

export const projectImgsSrcAtom = atom<string[]>({
  key: 'project-imgs-src',
  default: [],
});

export const getProjectImgsSrcLengthSelector = selector<number>({
  key: 'get-project-imgs-src-length',
  get: ({ get }) => {
    const arr = get(projectImgsSrcAtom);
    return arr.length;
  },
});
