import { useReducer } from "react"
import { useCounterState, useCounterReducer } from "../../state"

export const Reducer = () => {
	const [state, dispatch] = useReducer(useCounterReducer, useCounterState)

	return (
		<>
			<h3>Counter Reducer: { state.counter }</h3>

			<br />
			<div className="d-flex gap-2">
				<button 
					className="btn btn-dark border text-white"
					onClick={() => dispatch({ type: 'decrement' })}
				>
					Decrement - 1
				</button>

				<button 
					className="btn btn-dark border text-white"
					onClick={() => dispatch({ type: 'increment' })}
				>
					Increment + 1
				</button>

				<button 
					className="btn btn-outline-success"
					onClick={() => dispatch({ type: 'custom', incrementBy: 100 })}
				>
					Increment + 100
				</button>
			</div>
		</>
	)
}
