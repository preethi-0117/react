
import './App.css';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, decrementByAmount } from './redux/slices/counter'
import { decrementAmt , incrementAmt , incrementAmount, decrementAmount } from './redux/slices/remaind'

function App() {

  const count= useSelector(state => state.counter)
  const dispatch = useDispatch()
  
  const amt = useSelector(state => state.remaind)
  const dispatched =useDispatch()


  return (
    <div className="App">

        {JSON.stringify(count.value)}
       
        <button type="button" onClick={() => dispatch(increment())}>Increment</button>
        <button type="button" onClick={() => dispatch(decrement())}>Decrement</button>
        <button type="button" onClick={() => dispatch(incrementByAmount (5))}>Increment by amount</button>
        <button type="button" onClick={() => dispatch(decrementByAmount (5))}>Decrement by amount</button>


        {JSON.stringify(amt.amount)}

        <button type="button" onClick={() => dispatched(incrementAmt())}>Increment</button>
        <button type="button" onClick={() => dispatched(decrementAmt())}>Decrement</button>
        <button type="button" onClick={() => dispatched(incrementAmount (5))}>Increment by amount</button>
        <button type="button" onClick={() => dispatched(decrementAmount (5))}>Decrement by amount</button>


    </div>
  );
}

export default App;
