import { useEffect, useRef, useState } from "react"

type ChildArgs = { 
	milliseconds: number 
}

export const Child = ({ milliseconds }: ChildArgs) => {
	const [seconds, setSeconds] = useState(0);
	const ref = useRef<NodeJS.Timeout>();

	useEffect(() => {
		if(ref.current) clearInterval(ref.current)
		ref.current = setInterval(() => setSeconds(s => s + 1), milliseconds)
	}, [milliseconds])

	return (
		<>
			<h3>Timer: <small>{ seconds }</small></h3>
		</>
	)
}
