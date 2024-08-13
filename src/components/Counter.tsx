import { useState } from "react"


export const Counter = () => {
	const [counter, setCounter] = useState(0);

	const increment = () => setCounter(counter + 1)
	const decrement = () => setCounter(counter - 1)
	const reset = () => setCounter(0)

	return (
		<div className='mt-5'>
			<h3>Counter: { counter }</h3>
			<br />
			<div className="d-flex gap-2">
				<button 
					className="btn bg-black text-white" 
					onClick={decrement}
				>
					Decrement - 1
				</button>

				<button 
					className="btn bg-black text-white" 
					onClick={increment}
				>
					Increment + 1
				</button>

				<button 
					className="btn bg-danger text-white" 
					onClick={reset}
				>
					Reset
				</button>
			</div>
		</div>
	)
}
