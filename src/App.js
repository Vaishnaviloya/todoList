import logo from './logo.svg';
import './App.css';
import Todolists from './component/1-TodoList';
import Count from './component/3-IncDec';
import Todo from './component/4-todo';

function App() {
  return (
    <div className="App">
      <Todolists />
      {/* <Count /> */}
      {/* <Todo /> */}
    </div>
  );
}

export default App;
