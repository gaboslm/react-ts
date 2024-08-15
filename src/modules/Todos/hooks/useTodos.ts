import { useContext } from "react"
import { TodoContext } from "../context/TodosContext"

export const useTodos = () => {
	const { todoState, addTodo, toggleTodo } = useContext( TodoContext )

	const { todos } = todoState

	return {
		todos: todos,
		pendingTodos: todos.filter(todo => !todo.completed),
		completedTodos: todos.filter(todo => todo.completed),
		addTodo,
		toggleTodo,
	}
}