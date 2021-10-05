import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = (props) => {

    // destructring
    const { cart } = props;

    // calculation total
    let total = 0;

    for (const course of cart) {
        total += course.free;
    }




    return (
        <div className="cart">

            <h4> <FontAwesomeIcon icon={faUser} /> course Added: {props.cart.length}</h4>
            <div className="name">
                <h4>course Information:</h4>
                {
                    cart.map(cart => <Name name={cart}
                        key={cart.key}

                    ></Name>)
                }
            </div>

            <h4>Total Course Free: $ {total}</h4>
            <Link to='/thumbs' className="btn">
                <button>Buy Now</button>
            </Link>


        </div>
    );
};
// Name componet
const Name = (props) => {

    return (
        <div className="name">
            <div className="single-cart">
                <img src={props.name.instructor.img} alt="" />
                <p> {props.name.title}</p>
                <p>$ {props.name.free}</p>
            </div>

        </div>
    )
}

export default Cart;