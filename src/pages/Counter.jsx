import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Feature/counterSlice"

export default function Counter() {
    const dispatch = useDispatch();
    let counter = useSelector(state => state.counter.value);
    const test = useSelector(state => state.counter.test)
    return (

        <div className="container text-center">
            <div className="tambahkurang">
                <h1>Buy now</h1>
                <h2>{test}</h2>
                <h1> {counter}</h1>
                <button className="buy" onClick={() => dispatch(increment())} >  +   </button>
                <button className="buy" onClick={() => dispatch(decrement())}>  -  </button>
                <br /><br />
                <button type="button" className="btn btn-secondary">Checkout</button><br />
                <Link to='/'> ke home</Link> <br /><br />

            </div>
        </div>
    );
}
