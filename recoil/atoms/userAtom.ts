import { atom } from "recoil";
import { User } from "types/userType";

export const userAtom = atom<User | null>({
  key: "user",
  default: null,
});
