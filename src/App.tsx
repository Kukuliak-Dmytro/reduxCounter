import './App.css'
import Counter from './Counter'
import { useSelector } from 'react-redux'
import { RootState } from './state/store'
function App() {
  const loading=useSelector((state:RootState)=>state.counter.loading)
  
  return (
    <>
      <Counter></Counter>
      <div className={`overlay ${loading?"active":""}`}>
        <div className="loading"/>        
      </div>
    </>
  )
}

export default App
