import { useState } from "react"
import { useForm } from "../hooks"
import Spinner from "./Spinner"

type FormData = { 
	name: string, 
	email: string
}
export const Form = () => {
	const [users, setUsers] = useState<FormData[]>([]);
	const [loading, setLoading] = useState(false);

	const { form, handleChange } = useForm<FormData>({ name: 'John', email: 'Doe' })

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if(loading) return;

		setLoading(true)
		setTimeout(() => {
			setUsers([...users, form])
			setLoading(false)
		}, 768);
	}

	return (
		<>
			<h3>Form</h3>

			<br />

			<div className="d-flex gap-3">
				<form 
					onSubmit={ handleSubmit } 
					className='d-flex flex-column gap-3' 
					style={{
						minWidth: 350
					}}
				>
					<div>
						<label 
							htmlFor="email"
							className="form-label text-sm ps-2 m-0"
						>
							Email
						</label>
						<input 
							id="email" 
							type="text" 
							className="form-control bg-dark text-white" 
							name="email"
							placeholder="johndoe@example.com"
							value={ form.email }
							onChange={ handleChange }
						/>
					</div>

					<div>
						<label 
							htmlFor="name"
							className="form-label text-sm ps-2 m-0"
						>
							Name
						</label>
						<input 
							id="name" 
							type="text" 
							className="form-control bg-dark text-white" 
							name="name"
							placeholder="John Doe"
							value={ form.name }
							onChange={ handleChange }
						/>
					</div>

					<button 
						type="submit"
						className="btn btn-outline-primary text-uppercase px-3"
					>
						Create user { loading && <Spinner /> }
					</button>
				</form>
				<div className="d-flex flex-column gap-2 w-100 pe-2" style={{
					height: 200,
					overflowY: 'scroll'
				}}>
					{
						users.map((user, i) => {
							return (
								<div 
									className="border w-100 px-3" 
									key={i}
									style={{
										padding: '.5rem'
									}}
								>
									{ JSON.stringify(user) }
								</div>
							)
						})
					}
				</div>
			</div>
		</>
	)
}
