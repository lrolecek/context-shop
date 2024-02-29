import {useReducer, createContext} from 'react';

export const CartContext = createContext(null);


const cartItemsReducer = (cartItems, action) => {

	switch (action.type) {

		case 'ADD_ITEM': {
			return [
				...cartItems,
				{
					id: action.id,
					name: action.name,
					price: action.price,
					amount: action.amount,
				}
			]
		}

		case 'EMPTY_CART': {
			return []
		}

	}
}



export const CartContextProvider = ({children}) => {
	const [cartItems, dispatch] = useReducer( cartItemsReducer, [])

	return (
		<CartContext.Provider value={{cartItems, dispatch}}>
			{children}
		</CartContext.Provider>
	)
}