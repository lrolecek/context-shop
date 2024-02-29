import {useContext} from 'react'
import {CartContext} from './../context/CartContext'
import {UserContext} from './../context/UserContext'

const Cart = () => {
	const {cartItems, dispatch} = useContext(CartContext)
	const {user} = useContext(UserContext)

	const totalPrice = cartItems.reduce((sum, item)=>{
		return sum + item.price * item.amount
	}, 0)

	return (
		<div style={{border: '5px solid hotpink', margin: '1em', padding: '1em'}}>
			<h3>Cart</h3>
			{ user.loggedIn
				? <p>{user.name} {user.surname}</p>
				: <p>Uzivatel neni prihlasen</p>
			}

			<p>Items in cart: {cartItems.length}</p>
			<p>Total price: {totalPrice}</p>

			<ul>
				{cartItems.map(item => <li key={item.id}>{item.amount}x {item.name}</li>)}
			</ul>

			<button onClick={() => { dispatch({type: 'EMPTY_CART'}) }}>Smazat košík</button>
		</div>
	);
}

export default Cart;