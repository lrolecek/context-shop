import {useReducer} from 'react'


const countReducer = (count, action) => {

	switch (action.type) {
		case 'zvetsit': {
			return count + 1
		}

		case 'zmensit': {
			return count - 1
		}

		case 'vynulovat': {
			return 0
		}

		case 'nasobit': {
			return count * action.amount
		}
	}
}



export const Komponenta = () => {

	const [count, dispatch] = useReducer( countReducer , 0);

	return (
		<>
			<h2>{count}</h2>
			<button onClick={() => { dispatch({ type: 'zvetsit' })  }}>+</button>
			<button onClick={() => { dispatch({ type: 'zmensit' })  }}>-</button>
			<button onClick={() => { dispatch({ type: 'vynulovat' })  }}>0</button>
			<button onClick={() => { dispatch({ type: 'nasobit', amount: 2 })  }}>2x nasobit</button>
			<button onClick={() => { dispatch({ type: 'nasobit', amount: 3 })  }}>3x nasobit</button>
			<button onClick={() => { dispatch({ type: 'nasobit', amount: 10 })  }}>10x nasobit</button>

		</>
	)
}