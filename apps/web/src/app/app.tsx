import styles from "./app.module.scss";

import { ReactComponent as Logo } from "./logo.svg";
// import star from "./star.svg";

import React, { useState, useEffect } from "react";
import { todoService } from "../lib/apis/todo";
import { Todo } from "@todo/api-interfaces";

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    todoService.fetchAll().then((res) => {
      setTodos(res);
    });
  }, []);

  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to web!</h1>
      </header>
      <main>
        <ul>
          {todos.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
