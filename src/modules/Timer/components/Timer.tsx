import { useState } from "react"
import { Child } from "./Child"

export const Timer = () => {
	const [milliseconds, setMilliseconds] = useState(1000)
	return (
		<>
			<Child milliseconds={ milliseconds }/>

			<h6 className="text-white-50 text-sm">Timer changes its value every { milliseconds / 1000 } second (s)</h6>

			<br />
		
			<div className="d-flex gap-2 mb-2">
				<button 
					className="btn btn btn-dark border text-white"
					onClick={() => setMilliseconds(1000)}
				>
					Every second
				</button>

				<button 
					className="btn btn btn-dark border text-white"
					onClick={() => setMilliseconds(2000)}
				>
					Every two seconds
				</button>
			</div>
		</>
	)
}
