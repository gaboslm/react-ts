import { Todo } from "../types"
import { useTodos } from "../hooks/useTodos"

export type IItem = {
	name: string
}

export const Item = ({ item }: { item: Todo}) => {
	const { toggleTodo } = useTodos()

	return (
		<li 
			className={ 'px-3 py-2 ' + (item.completed ? 'text-success' : 'text-danger') }
			key={item.id}
			style={{
				cursor: 'default',
				userSelect: 'none',
				textDecoration: item.completed ? 'line-through' : '',
				border: item.completed ? '1px solid green' : '1px solid red',
			}}
			onDoubleClick={ () => toggleTodo(item.id) }
		>
			{ item.description }
		</li>
	)
}
