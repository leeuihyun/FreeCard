import { atom } from "recoil";

type CommonState = {
  value: number;
};

const initialState: CommonState = {
  value: 0,
};

export const recoilCounterState = atom({
  key: "recoilCounterState",
  default: initialState,
});
