import { ChangeEvent, useState } from "react";

export function useForm<T> ( initialState: T) {
	const [form, setForm] = useState(initialState);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		
		setForm({
			...form,
			[name]: value,
		})
	}
	
	return { 
		form,
		handleChange
	}
}