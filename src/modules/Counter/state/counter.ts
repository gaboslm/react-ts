export const useCounterState = {
	counter: 0
}

type useCounterStateType = typeof useCounterState

export type userCounterActions = {
	type: 'increment' 
} | {
	type: 'decrement'
} | {
	type: 'custom'
	incrementBy: number
}

export const useCounterReducer = ( state: useCounterStateType, action: userCounterActions ): useCounterStateType => {
	switch (action.type){
		case 'increment': {
			return {
				...state,
				counter: state.counter + 1
			}
		}
		case 'decrement': {
			return {
				...state,
				counter: state.counter - 1
			}
		}
		case 'custom': {
			return {
				...state,
				counter: state.counter + action.incrementBy
			}
		}
		default:
			return state;
	}
}
