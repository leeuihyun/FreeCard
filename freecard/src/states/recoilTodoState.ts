import { atom } from "recoil";

export type TodoItem = {
  id: number;
  title: string;
  checked: boolean;
};

type CommonType = {
  TodoList: TodoItem[];
};

const initialState: CommonType = {
  TodoList: [],
};

export const recoilTodoState = atom({
  key: "recoilTodoState",
  default: initialState,
});
