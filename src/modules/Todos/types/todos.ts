export type Todo = {
	id: string
	description: string
	completed: boolean
}

export type TodosState = {
	todos: Todo[]
	todosCount: number
	completed: number
	pending: number
}