import {useContext} from 'react'
import {CartContext} from './../context/CartContext'
import {UserContext} from './../context/UserContext'

const Product = ({id, name, description, price}) => {

	const {dispatch} = useContext(CartContext)
	const {user} = useContext(UserContext)

	const handleBuy = () => {
		dispatch({
			type: 'ADD_ITEM',
			id,
			name,
			price,
			amount: 1,
		})
	}


	return (
		<div style={{border: '5px solid green', margin: '1em', padding: '1em'}}>
			<h3>{name}</h3>
			<p>{description}</p>
			<p><strong>{price}</strong></p>
			{ user.loggedIn && <button onClick={handleBuy}>Buy</button> }
		</div>
	);
}

export default Product;