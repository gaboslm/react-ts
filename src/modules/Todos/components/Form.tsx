import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Spinner from "../../../components/Spinner";
import { useForm } from "../../../hooks";
import { Todo } from "../types";
import { useTodos } from "../hooks/useTodos";

export const Form = () => {
	const [loading, setLoading] = useState(false);

	const { form, handleChange } = useForm<Omit<Todo, 'id' | 'completed'>>({ description: '' })
	const { addTodo } = useTodos()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(!form.description) return;
		if(loading) return;
		setLoading(true)

		setTimeout(() => {
			addTodo({
				id: uuidv4(),
				description: form.description,
				completed: false
			})
			form.description = ''
			setLoading(false)
		}, 768);
	}

	return (
		<>
			<form 
				onSubmit={ handleSubmit } 
				className='d-flex flex-column gap-3' 
				style={{
					minWidth: 350
				}}
			>
				<div>
					<label 
						htmlFor="description"
						className="form-label text-sm ps-2 m-0"
					>
						Description
					</label>
					<input 
						id="description" 
						type="text" 
						className="form-control bg-dark text-white" 
						name="description"
						placeholder="John Doe"
						value={ form.description }
						onChange={ handleChange }
					/>
				</div>

				<button 
					type="submit"
					className="btn btn-outline-primary text-uppercase px-3"
				>
					Create task { loading && <Spinner /> }
				</button>
			</form>
		</>
	)
}
