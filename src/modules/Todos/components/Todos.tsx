import { TodoProvider } from '../context/TodosProvider'
import { Form } from './Form'
import { List } from './List'

export const Todo = () => {
	return (
		<TodoProvider>
			<h3>Task List</h3>

			<br />

			<div className='d-flex gap-3'>
				<div
					style={{
						minWidth: 350
					}}
				>
					<Form />
				</div>

				<div className='w-100'>
					<List />
				</div>
			</div>
		</TodoProvider>
	)
}
