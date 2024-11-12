import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./state/store";
import { decrement, increment, incrementByAmount, decrementByAmount,incrementAsync,decrementAsync } from "./state/counter/counterSlice";
const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={() => dispatch(decrementAsync(5))}>~-5</button>
                <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
                <button onClick={() => dispatch(decrement())}>-1</button>
                <button onClick={() => dispatch(increment())}>+1</button>
                <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
                <button onClick={() => dispatch(incrementAsync(5))}>~+5</button>

            </div>
        </div>
    );
}
export default Counter