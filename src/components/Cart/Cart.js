import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

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
                <h4>course Instructor:</h4>
                {
                    cart.map(cart => <Name name={cart}
                        key={cart.key}

                    ></Name>)
                }
            </div>

            <h4>Total Course Free: $ {total}</h4>
            <div className="btn">
                <button>Buy Now</button>
            </div>


        </div>
    );
};
// Name componet
const Name = (props) => {

    return (
        <div className="name">
            <div className="m">
                <img src={props.name.instructor.img} alt="" />
                <p> {props.name.category}</p>
                <p>$ {props.name.free}</p>
            </div>

        </div>
    )
}

export default Cart;