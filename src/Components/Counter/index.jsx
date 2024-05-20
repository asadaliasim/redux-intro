import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/slicer/counter';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default Counter;
