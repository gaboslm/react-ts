import { createContext } from "react";
import { Todo, TodosState } from "../types";

type TodoContentProps = {
	todoState: TodosState,
	addTodo: (todo: Todo) => void,
	toggleTodo: (id: string) => void
}

export const TodoContext = createContext<TodoContentProps>({} as TodoContentProps);