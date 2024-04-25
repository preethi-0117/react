
import './App.css';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, decrementByAmount } from './redux/slices/counter'


function App() {


  const count = useSelector(state => state.counter)
  const dispatch = useDispatch()


  return (
    <div className="App">

       {JSON.stringify(count.value)}
       
        <button type="button" onClick={() => dispatch(increment())}>Increment</button>
        <button type="button" onClick={() => dispatch(decrement())}>Decrement</button>
        <button type="button" onClick={() => dispatch(incrementByAmount (5))}>Increment by amount</button>
        <button type="button" onClick={() => dispatch(decrementByAmount (5))}>Decrement by amount</button>
    </div>
  );
}

export default App;
