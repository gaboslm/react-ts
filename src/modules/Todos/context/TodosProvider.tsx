import { TodosReducer } from './TodosReducer';
import { Todo, TodosState } from '../types'
import { TodoContext } from './TodosContext'
import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const INITIAL_STATE: TodosState = {
	todos: [
		{ id: uuidv4(), description: 'Todo #1', completed: false }
	],
	todosCount: 2,
	completed: 0,
	pending: 0,
}

export type Props = { 
	children: JSX.Element | JSX.Element[]
} 

export const TodoProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(TodosReducer, INITIAL_STATE)

	const toggleTodo = (id: string) => {
		dispatch({ type: 'toggleTodo', payload: { id }})
	}
	
	const addTodo = (todo: Todo) => {
		dispatch({ type: 'addTodo', payload: todo })
	}

	return (
		<TodoContext.Provider 
			value={{
				todoState: state,
				addTodo,
				toggleTodo,
			}}
		>
			{ children }
		</TodoContext.Provider>
	)
}
