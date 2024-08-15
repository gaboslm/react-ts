import { Item } from './Item'
import { useTodos } from '../hooks/useTodos';

export const List = () => {

	const { pendingTodos, completedTodos } = useTodos();

	return (
		<div className='d-flex gap-3 w-100'>
			<div className='w-50'>
				<h5>Pending {pendingTodos.length}</h5>
				<ul 
					className='d-flex flex-column gap-1 ps-0' 
					style={{ 
						listStyle: 'none'
					}}
				>
					{
						pendingTodos.map(todo => {
							return (
								<Item 
									key={todo.id}
									item={todo}
								/>
							)
						})
					}
				</ul>
			</div>
			<div className='w-50'>
				<h5>Done {completedTodos.length}</h5>
				<ul 
					className='d-flex flex-column gap-1 ps-0' 
					style={{ 
						listStyle: 'none'
					}}
				>
					{
						completedTodos.map(todo => {
							return (
								<Item 
									key={todo.id}
									item={todo}
								/>
							)
						})
					}
				</ul>
			</div>
		</div>
	)
}
