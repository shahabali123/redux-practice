import './App.css'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'
import { Provider } from 'react-redux'
import {store} from './app/store'

function App() {
  return (
    <Provider store={store}>
      <Todo/>
      <hr />
      <AddTodo/>
    </Provider>
  )
}

export default App
