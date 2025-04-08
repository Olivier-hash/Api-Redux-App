import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementByAmount } from "../redux/counter";

function Counter() {
  const { count } = useSelector((state) => (state.counter))
  const dispatch = useDispatch()

   return(
    <>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment() )}>Increment+</button>
        <button onClick={() => dispatch(decrement() )}>Decrement-</button>
        <button onClick={() => dispatch(incrementByAmount(33) )}>Increment by 33</button>
    </>
   );

}
export default Counter