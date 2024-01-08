import { atom } from "recoil";

export const outputState = atom({
  key: "outputState",
  default: {
    output: null as string | null,
    console: null as string | null,
  },
});
