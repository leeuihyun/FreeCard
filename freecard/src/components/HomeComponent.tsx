import React from "react";
import CardComponent from "./CardComponent";
import { useRecoilState } from "recoil";
import { recoilCounterState } from "../states/recoilCounterState";
import { recoilTodoState, TodoItem } from "../states/recoilTodoState";
import { useState } from "react";

function HomeComponent() {
  const [recoilCount, setRecoilCount] = useRecoilState(recoilCounterState);
  const [recoilTodo, setRecoilTodo] = useRecoilState(recoilTodoState);
  const [title, setTitle] = useState("");

  const onIncrease = () => {
    setRecoilCount({ value: recoilCount.value + 1 });
  };

  const onDecrease = () => {
    setRecoilCount({ value: recoilCount.value - 1 });
  };

  const onChangeTitle = (event: any) => {
    setTitle(event.target.value);
  };

  const onSubmit = () => {
    const insertItem: TodoItem = {
      id: recoilTodo.TodoList.length + 1,
      title: title,
      checked: false,
    };
    setRecoilTodo({
      TodoList: [...recoilTodo.TodoList, insertItem],
    });

    setTitle("");
  };
  return (
    <div>
      <CardComponent></CardComponent>
      <div>{recoilCount.value}</div>
      <button onClick={onIncrease}>increase</button>
      <button onClick={onDecrease}>decrease</button>

      <br />
      <br />

      <div>
        {recoilTodo.TodoList.map((v) => {
          return (
            <div>
              <div>{v.id}</div>
              <div>{v.title}</div>
            </div>
          );
        })}
      </div>
      <input
        type="text"
        value={title}
        onChange={onChangeTitle}
        placeholder="제목을 입력하세요"
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}

export default HomeComponent;
